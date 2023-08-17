# ---------------------------- AIRFLOW ---------------------------- #
kubectl delete pv airflow-local-dags-pv
kubectl delete pv airflow-local-logs-pv
kubectl create namespace airflow
kubectl apply -f storage.yaml

helm upgrade --install airflow apache-airflow/airflow --namespace airflow -f values.yaml --version 1.10.0 --debug

# ---------------------------- TRAEFIK ---------------------------- #
kubectl apply -f traefik.yaml