# ---------------------------- ARGOCD ---------------------------- #
# helm repo add argo https://argoproj.github.io/argo-helm
# helm repo update
# helm search repo argo/argo-cd --versions | head -n 5
# helm show values argo/argo-cd --version 7.3.11 > argocd.yaml
helm upgrade --install argo-cd argo/argo-cd -f values.yaml --namespace argo-cd --create-namespace --version 7.3.11

# ---------------------------- TRAEFIK ---------------------------- #
kubectl apply -f traefik.yaml
