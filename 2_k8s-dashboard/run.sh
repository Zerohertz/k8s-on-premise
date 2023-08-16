# ---------------------------- K8S DASHBOARD ---------------------------- #
kubectl delete ns kubernetes-dashboard
kubectl create ns kubernetes-dashboard

# wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.1/aio/deploy/recommended.yaml
kubectl apply -f k8s-dashboard.yaml

# ---------------------------- TRAEFIK ---------------------------- #
kubectl apply -f traefik.yaml

# ---------------------------- USER ---------------------------- #
kubectl apply -f user.yaml

# ---------------------------- ADMIN ---------------------------- #
# kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}')

# ---------------------------- CLIENT ---------------------------- #
# kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep client-user | awk '{print $1}')
