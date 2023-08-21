# helm repo add argo https://argoproj.github.io/argo-helm
# helm repo update
# helm show values argo/argo-cd --version 5.34.6 > values.yaml

helm upgrade --install argo-cd argo/argo-cd -f values.yaml --namespace argo-cd --create-namespace --version 5.34.6 #--debug

# helm uninstall argo-cd -n argo-cd