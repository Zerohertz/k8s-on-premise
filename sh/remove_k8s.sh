sudo kubeadm reset

sudo systemctl stop kubelet
sudo systemctl stop docker

sudo ip link delete cni0
sudo ip link delete flannel.1

sudo rm -rf /var/lib/cni/
sudo rm -rf /var/lib/kubelet/*
sudo rm -rf /var/lib/etcd
sudo rm -rf /run/flannel
sudo rm -rf /etc/cni
sudo rm -rf /etc/kubernetes
sudo rm -rf ~/.kube

sudo apt-get purge kubeadm kubectl kubelet kubernetes-cni kube* -y
sudo apt-get autoremove