<div align=center> <h1> :ship: Kubernetes: On-premise :ship: </h1> </div>

> Kubernetes를 직접 구축해보고 서비스를 배포해보기 위한 코드들입니다.

</br>
<div align = "center">
    <a href = "https://zerohertz.xyz">
        <img src="https://img.shields.io/badge/Zerohertz's%20Server-800a0a?style=for-the-badge&logo=data.ai&logoColor=white"/>
    </a>
</div>
</br>
<div align="center">

|No.|`.sh`|Stacks|Features|
|:-:|:-:|-|-|
|:zero:|[sh/install_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/install_k8s.sh)|:o: [Kubelet](https://github.com/kubernetes/kubelet)</br>:o: [Kubeadm](https://github.com/kubernetes/kubeadm)</br>:o: [Kubectl](https://github.com/kubernetes/kubectl)</br>:o: [Flannel](https://github.com/flannel-io/flannel)|:white_check_mark: 단일 node로 실행하므로 [master node의 `taint` 변경](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/install_k8s.sh#L41)|
|:one:|[1_init/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/1_init/run.sh)|:o: [Metrics Server](https://github.com/kubernetes-sigs/metrics-server)</br>:o: [Local Path Provisioner](https://github.com/rancher/local-path-provisioner)</br>:o: [MetalLB](https://github.com/metallb/metallb)</br>:o: [Traefik](https://github.com/traefik/traefik)|:white_check_mark: [thomseddon/traefik-forward-auth](https://github.com/thomseddon/traefik-forward-auth)를 통한 [Google OAuth](https://developers.google.com/identity/protocols/oauth2?hl=ko) Middleware|
|:two:|[2_k8s-dashboard/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/2_k8s-dashboard/run.sh)|:o: [Kubernetes Dashboard](https://github.com/kubernetes/dashboard)|:white_check_mark: Token 없이 접속 가능 (:warning: 보안 유의! :warning:)|
|:two:|[2_monitoring/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/2_monitoring/run.sh)|:o: [Prometheus](https://github.com/prometheus/prometheus)</br>:o: [Grafana](https://github.com/grafana/grafana)|:white_check_mark: [Node Exporter Full](https://grafana.com/grafana/dashboards/1860-node-exporter-full/), [Traefik Official Kubernetes Dashboard](https://grafana.com/grafana/dashboards/17347-traefik-official-kubernetes-dashboard/) 사용 가능|
|:three:|[airflow/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/airflow/run.sh)|:o: [Apache Airflow](https://github.com/apache/airflow)|:white_check_mark: [Kubernetes Executor](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/executor/kubernetes.html) 사용|
|:three:|[argo-cd/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/argo-cd/run.sh)|:o: [Argo CD](https://github.com/argoproj/argo-cd)||
|:three:|[nextcloud/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/nextcloud/run.sh)|:o: [Nextcloud](https://github.com/nextcloud)||
|:art:|[portal/build.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/portal/build.sh)</br>[portal/run.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/portal/run.sh)|:o: [@rldnd](https://github.com/rldnd)|:white_check_mark: 모든 서비스를 한번에 접속할 수 있는 portal 추가|

</div>

+ 모든 서비스는 `https://${SERVICE}.${DDNS}`에 배포됩니다.


<div align="center">
  <img width="2163" alt="portal" src="https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/262010647-c873b57a-95cb-4a57-ac44-6116b8d3c265.png">
  <img width="519" alt="traefik" src="https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/262011380-51d6f3a0-6b2c-42c3-b72e-7d68b563314a.png">
</div>

---

## Etc.

+ [sh/reset_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/reset_k8s.sh): Kubernetes 재설정
+ [sh/remove_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/remove_k8s.sh): Kubernetes 삭제
+ [sh/install_k9s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/install_k9s.sh): [K9s](https://github.com/derailed/k9s) 설치
+ [sh/base64.sh](https://github.com/Zerohertz/k8s-on-premise/blob/master/sh/base64.sh): Kubernetes의 [Secret](https://kubernetes.io/ko/docs/concepts/configuration/secret/)을 사용하기 위한 base64 encoding
