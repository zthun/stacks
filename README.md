# Description

Deployments for latest zthunworks versions

## Usage

### Initial Setup

```sh
# Setup initial namespace and repositories
kubectl create namespace zthunworks
helm repo add jetstack https://charts.jetstack.io
helm repo update
# Install Ingress Controller and Cert Manager - Note that cert manager won't really work on a localhost
# So that is only really needed for managed clusters.
helm install zthunworks-nginx-controller oci://ghcr.io/nginxinc/charts/nginx-ingress -n zthunworks
helm install zthunworks-cert-manager jetstack/cert-manager --set installCRDs=true -n zthunworks
# Initial Installation
helm install zthunworks-stacks ./src -n zthunworks
```

### Upgrade Installation

```sh
# You'll need to store secrets and other information in the ~/.zthunworks/values.yaml file.
helm upgrade zthunworks-stacks ./src -n zthunworks -f ~/.zthunworks/values.yaml
```
