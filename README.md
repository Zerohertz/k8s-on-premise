<div align=center>
    <h1>
        🚢 Kubernetes: On-premise 🚢
    </h1>
</div>

> Kubernetes를 직접 구축해보고 서비스를 배포해보기 위한 코드들입니다.

</br>
<div align = "center">
    <img src="https://img.shields.io/badge/Kubernetes-v1.30.3-800A0A?style=for-the-badge&logo=Kubernetes&labelColor=326CE5&logoColor=white"/>
    </br>
    <a href = "https://zerohertz.xyz">
        <img src="https://img.shields.io/badge/Zerohertz's%20Server-800a0a?style=for-the-badge&logo=data.ai&logoColor=white"/>
    </a>
</div>
</br>
<div align="center">

|   No.   | Stacks                                                                                                                                                                                                                                                                  | Features                                                                                                                                                                                                                                         |
| :-----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| :zero:  | :o: [Kubelet](https://github.com/kubernetes/kubelet)</br>:o: [Kubeadm](https://github.com/kubernetes/kubeadm)</br>:o: [Kubectl](https://github.com/kubernetes/kubectl)</br>:o: [Calico](https://github.com/projectcalico/calico)                                        | :white_check_mark: 단일 node로 실행하므로 [master node의 `taint` 변경](https://github.com/Zerohertz/k8s-on-premise/blob/v1.30.3-4.Argo-CD/sh/install_k8s.sh#L52)                                                                                 |
|  :one:  | :o: [Metrics Server](https://github.com/kubernetes-sigs/metrics-server)</br>:o: [Local Path Provisioner](https://github.com/rancher/local-path-provisioner)</br>:o: [MetalLB](https://github.com/metallb/metallb)</br>:o: [Traefik](https://github.com/traefik/traefik) | :white_check_mark: [thomseddon/traefik-forward-auth](https://github.com/thomseddon/traefik-forward-auth)를 통한 [Google OAuth](https://developers.google.com/identity/protocols/oauth2?hl=ko) Middleware                                         |
|  :two:  | :o: [Argo CD](https://github.com/argoproj/argo-cd)                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                  |
| :three: | :o: [Prometheus](https://github.com/prometheus/prometheus)</br>:o: [Grafana](https://github.com/grafana/grafana)                                                                                                                                                        | :white_check_mark: [Node Exporter Full](https://grafana.com/grafana/dashboards/1860-node-exporter-full/), [Traefik Official Kubernetes Dashboard](https://grafana.com/grafana/dashboards/17347-traefik-official-kubernetes-dashboard/) 사용 가능 |
| :three: | :o: [Apache Airflow](https://github.com/apache/airflow)                                                                                                                                                                                                                 | :white_check_mark: [Kubernetes Executor](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/executor/kubernetes.html) 사용                                                                                                      |
| :three: | :o: [Nextcloud](https://github.com/nextcloud)                                                                                                                                                                                                                           | :white_check_mark: [Backend PostgreSQL 사용](https://zerohertz.github.io/home-server-cloud/#PostgreSQL)                                                                                                                                          |
|  :art:  | :o: [@rldnd](https://github.com/rldnd)                                                                                                                                                                                                                                  | :white_check_mark: 모든 서비스를 한번에 접속할 수 있는 portal 추가</br>:white_check_mark: [GitHub Actions 및 Argo CD 기반 CI/CD 적용](https://zerohertz.github.io/cicd-init/)                                                                    |

</div>

- 모든 서비스는 `https://${SERVICE}.${DDNS}`에 Argo CD로 배포됩니다.

<div align="center">
  <img width="2515" alt="argo-cd" src="https://github.com/user-attachments/assets/4b4c18cb-96a6-471d-b0dc-f21aeeb6781a">
  <img width="2515" alt="portal" src="https://github.com/user-attachments/assets/c64b57ab-76b7-4382-b76b-172cb3fa34bd">
  <img width="2515" alt="traefik" src="https://github.com/user-attachments/assets/8122765c-6034-4151-a39b-6829bd603ead">
</div>
