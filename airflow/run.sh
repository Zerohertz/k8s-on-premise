# ---------------------------- AIRFLOW ---------------------------- #
kubectl delete pv airflow-local-dags-pv
kubectl delete pv airflow-local-logs-pv
kubectl create namespace airflow
kubectl apply -f storage.yaml

helm upgrade --install airflow apache-airflow/airflow -f values.yaml --namespace airflow --version 1.10.0 --debug

# ---------------------------- TRAEFIK ---------------------------- #
kubectl apply -f traefik.yaml