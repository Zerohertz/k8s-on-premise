import type { AppInterface } from "@/common/types/app";

export const APP_LIST: AppInterface[] = [
  {
    name: "Blog",
    href: "https://zerohertz.github.io",
    imageSrc: "/images/blog.png",
  },
  {
    name: "Traefik",
    href: "https://traefik.${DDNS}",
    imageSrc: "/images/traefik.png",
  },
  {
    name: "Kubernetes",
    href: "https://k8s.${DDNS}",
    imageSrc: "/images/k8s.png",
  },
  {
    name: "Prometheus",
    href: "https://prometheus.${DDNS}",
    imageSrc: "/images/prometheus.png",
  },
  {
    name: "Grafana",
    href: "https://grafana.${DDNS}",
    imageSrc: "/images/grafana.png",
  },
  {
    name: "Airflow",
    href: "https://airflow.${DDNS}",
    imageSrc: "/images/airflow.png",
  },
  {
    name: "Argo CD",
    href: "https://argocd.${DDNS}",
    imageSrc: "/images/argocd.png",
  },
  {
    name: "Nextcloud",
    href: "https://cloud.${DDNS}",
    imageSrc: "/images/nextcloud.png",
  },
];
