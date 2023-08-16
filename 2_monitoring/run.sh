# kubectl delete pv prometheus-logs
# kubectl delete pv grafana-logs

kubectl create namespace monitoring
kubectl create configmap prometheus --from-file=prometheus.yml=configmap/prometheus.yaml -n monitoring
kubectl create configmap grafana --from-file=grafana.ini=configmap/grafana.ini -n monitoring
kubectl apply -f secret/grafana.yaml
kubectl apply -f traefik.yaml
kubectl apply -f prometheus.yaml
kubectl apply -f grafana.yaml