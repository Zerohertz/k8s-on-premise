<div align=center> <h1> 🚢 Kubernetes: On-premise 🚢 </h1> </div>

> Kubernetes를 직접 구축해보고 서비스를 배포해보기 위한 코드들입니다.

</br>
<div align = "center">
    <a href = "https://zerohertz.xyz">
        <img src="https://img.shields.io/badge/Zerohertz's%20Server-800a0a?style=for-the-badge&logo=data.ai&logoColor=white"/>
    </a>
</div>
</br>
<div align="center">

|No.|Stacks|Features|
|:-:|-|-|
|:zero:|:o: [Kubelet](https://github.com/kubernetes/kubelet)</br>:o: [Kubeadm](https://github.com/kubernetes/kubeadm)</br>:o: [Kubectl](https://github.com/kubernetes/kubectl)</br>:o: [Flannel](https://github.com/flannel-io/flannel)|:white_check_mark: 단일 node로 실행하므로 [master node의 `taint` 변경](https://github.com/Zerohertz/k8s-on-premise/blob/4.Argo-CD/sh/install_k8s.sh#L41)|
|:one:|:o: [Metrics Server](https://github.com/kubernetes-sigs/metrics-server)</br>:o: [Local Path Provisioner](https://github.com/rancher/local-path-provisioner)</br>:o: [MetalLB](https://github.com/metallb/metallb)</br>:o: [Traefik](https://github.com/traefik/traefik)|:white_check_mark: [thomseddon/traefik-forward-auth](https://github.com/thomseddon/traefik-forward-auth)를 통한 [Google OAuth](https://developers.google.com/identity/protocols/oauth2?hl=ko) Middleware|
|:two:|:o: [Kubernetes Dashboard](https://github.com/kubernetes/dashboard)|:white_check_mark: Token 없이 접속 가능 (:warning: 보안 유의! :warning:)|
|:two:|:o: [Prometheus](https://github.com/prometheus/prometheus)</br>:o: [Grafana](https://github.com/grafana/grafana)|:white_check_mark: [Node Exporter Full](https://grafana.com/grafana/dashboards/1860-node-exporter-full/), [Traefik Official Kubernetes Dashboard](https://grafana.com/grafana/dashboards/17347-traefik-official-kubernetes-dashboard/) 사용 가능|
|:three:|:o: [Apache Airflow](https://github.com/apache/airflow)|:white_check_mark: [Kubernetes Executor](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/executor/kubernetes.html) 사용|
|:three:|:o: [Argo CD](https://github.com/argoproj/argo-cd)||
|:three:|:o: [Nextcloud](https://github.com/nextcloud)|:white_check_mark: [Backend PostgreSQL 사용](https://zerohertz.github.io/home-server-cloud/#PostgreSQL)|
|:three:|:o: [Jenkins](https://github.com/jenkinsci)|:white_check_mark: GitOps를 위해 Jenkins Plugin을 통한 OAuth 사용|
|:art:|:o: [@rldnd](https://github.com/rldnd)|:white_check_mark: 모든 서비스를 한번에 접속할 수 있는 portal 추가</br>:white_check_mark: [GitHub Actions 및 Argo CD 기반 CI/CD 적용](https://zerohertz.github.io/cicd-init/)|

</div>

+ 모든 서비스는 `https://${SERVICE}.${DDNS}`에 Argo CD로 배포됩니다.

<div align="center">
  <img width="2515" alt="argo-cd" src="https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/279639363-fb5ebd02-fafa-4c1b-8c66-4087537a869c.png">
  <img width="2515" alt="portal" src="https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/279639181-6d0a07c4-a99f-43f3-8632-236ecac7ced9.png">
  <img width="2515" alt="traefik" src="https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/279639616-92e61512-4a1e-458b-80ce-12a2720be0b0.png">
</div>

---

## Etc.

+ [sh/reset_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/4.Argo-CD/sh/reset_k8s.sh): Kubernetes 재설정
+ [sh/remove_k8s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/4.Argo-CD/sh/remove_k8s.sh): Kubernetes 삭제
+ [sh/install_k9s.sh](https://github.com/Zerohertz/k8s-on-premise/blob/4.Argo-CD/sh/install_k9s.sh): [K9s](https://github.com/derailed/k9s) 설치
+ [sh/base64.sh](https://github.com/Zerohertz/k8s-on-premise/blob/4.Argo-CD/sh/base64.sh): Kubernetes의 [Secret](https://kubernetes.io/ko/docs/concepts/configuration/secret/)을 사용하기 위한 base64 encoding

> Visual Studio Code: `settings.json` (For Formatting)

```yaml
{
    ...
    "[yaml]": {
        "editor.defaultFormatter": "redhat.vscode-yaml",
        "editor.formatOnSave": true
    },
    "yaml.format.enable": true
}
```
