<div align=center> <h1> :ship: Kubernetes: On-premise :ship: </h1> </div>

> Kubernetes를 직접 구축해보고 서비스를 배포해보기 위한 코드들입니다.

1. [sh/install_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/install_k8s.sh): [Kubelet](https://github.com/kubernetes/kubelet), [Kubeadm](https://github.com/kubernetes/kubeadm), [Kubectl](https://github.com/kubernetes/kubectl) 및 [Flannel](https://github.com/flannel-io/flannel) 설치 및 K8s 초기화
2. [1_init/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/1_init/run.sh): [Metrics Server](https://github.com/kubernetes-sigs/metrics-server), [Local Path Provisioner](https://github.com/rancher/local-path-provisioner), [MetalLB](https://github.com/metallb/metallb), [Traefik](https://github.com/traefik/traefik) 설치
   + `metallb-system`가 잘 실행되고 있다면 Enter 클릭
3. [2_k8s-dashboard/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/2_k8s-dashboard/run.sh): [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) 설치 및 ingress 설정
4. [2_monitoring/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/2_monitoring/run.sh): [Prometheus](https://github.com/prometheus/prometheus) 및 [Grafana](https://github.com/grafana/grafana) 설치 및 ingress 설정
5. [airflow/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/airflow/run.sh): [Apache Airflow](https://github.com/apache/airflow) 설치 및 ingress 설정

모든 `Traefik`을 제외한 모든 서비스는 `https://${DDNS}/${SERVICE}`에 배포됩니다.
`Traefik`의 dashboard는 `https://${DDNS}`에 배포되어 `https://${DDNS}/dashboard`로 redirection됩니다.

---

## Etc.

+ [sh/reset_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/reset_k8s.sh): Kubernetes 재설정
+ [sh/remove_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/remove_k8s.sh): Kubernetes 삭제
+ [sh/install_k9s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/install_k9s.sh): [K9s](https://github.com/derailed/k9s) 설치