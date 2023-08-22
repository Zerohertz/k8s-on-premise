# ---------------------------- AIRFLOW ---------------------------- #
kubectl delete pv airflow-local-dags-pv
kubectl delete pv airflow-local-logs-pv
kubectl create namespace airflow
kubectl apply -f storage.yaml

kubectl create secret generic airflow-webserver-secret-key --from-literal="webserver-secret-key=$(python3 -c 'import secrets; print(secrets.token_hex(16))')" --namespace airflow
helm upgrade --install airflow apache-airflow/airflow -f values.yaml --namespace airflow --version 1.10.0

# ---------------------------- TRAEFIK ---------------------------- #
kubectl apply -f traefik.yaml