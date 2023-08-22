# ---------------------------- NEXTCLOUD ---------------------------- #
kubectl create namespace nextcloud
kubectl apply -f storage.yaml

# helm repo add nextcloud https://nextcloud.github.io/helm/
# helm repo update
# helm show values nextcloud/nextcloud --version 3.5.22 > nextcloud-values.yaml
helm upgrade --install nextcloud nextcloud/nextcloud -f values.yaml --namespace nextcloud --create-namespace --version 3.5.22

# ---------------------------- TRAEFIK ---------------------------- #
kubectl apply -f traefik.yaml