# ---------------------------- ARGOCD ---------------------------- #
helm upgrade --install argo-cd argo/argo-cd -f values.yaml --namespace argo-cd --create-namespace --version 5.34.6

# ---------------------------- TRAEFIK ---------------------------- #
kubectl apply -f traefik.yaml