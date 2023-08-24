# ---------------------------- METRICS-SERVER ---------------------------- #
kubectl apply -f metrics-server.yaml

# ---------------------------- LOCAL-PATH ---------------------------- #
kubectl apply -f https://raw.githubusercontent.com/rancher/local-path-provisioner/v0.0.24/deploy/local-path-storage.yaml
kubectl apply -f local-path.yaml

# ---------------------------- METALLB ---------------------------- #
# https://metallb.universe.tf/installation/
kubectl delete namespace metallb-system
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.10/config/manifests/metallb-native.yaml
kubectl get configmap kube-proxy -n kube-system -o yaml | \
sed -e "s/strictARP: false/strictARP: true/" | \
kubectl apply -f - -n kube-system

echo "IS 'metallb-system' Done?"
read GO

kubectl apply -f metallb.yaml

# ---------------------------- TRAEFIK ---------------------------- #
# helm show values traefik/traefik > traefik.yaml
# helm repo add traefik https://helm.traefik.io/traefik
# helm repo update
helm uninstall traefik -n kube-system
helm install traefik traefik/traefik -f traefik-values.yaml -n kube-system
# helm uninstall traefik -n kube-system

# ---------------------------- OAUTH ---------------------------- #
kubectl create namespace oauth
kubectl apply -f oauth.yaml

# ---------------------------- NGINX ---------------------------- #
# helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
# helm repo update
# kubectl create namespace nginx
# helm install my-nginx ingress-nginx/ingress-nginx -n nginx