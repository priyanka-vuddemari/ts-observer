#!/bin/bash
set -e

KIND_VERSION="v0.23.0"

echo "Installing kind ${KIND_VERSION}..."
curl -Lo /usr/local/bin/kind \
  "https://kind.sigs.k8s.io/dl/${KIND_VERSION}/kind-linux-amd64"
chmod +x /usr/local/bin/kind

echo "kind installed:"
kind --version
