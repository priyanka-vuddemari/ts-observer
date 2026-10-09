# Module 1 — Devcontainer setup

**Time:** ~30 minutes
**Goal:** A devcontainer that gives every contributor the same Node, Docker, kubectl, Helm, and kind environment automatically.

## Why a devcontainer?
Without a devcontainer, "works on my machine" is a real problem. With it, every contributor runs identical tool versions inside a container. You open the project in VS Code, click "Reopen in Container", and everything is ready.

## Key decision — Docker-in-Docker vs host socket
kind needs Docker available inside the container. Two approaches:

| Approach | Tradeoff |
|---|---|
| Docker-in-Docker | Fully isolated, slower |
| Host socket mount | Faster, shares host Docker daemon |

We use host socket mount for this project.

## Step 1 — Create .devcontainer/devcontainer.json
Already done in this repo. It includes:
- Node 20 base image
- Docker outside of Docker feature
- kubectl + Helm feature
- kind installed via postCreateCommand

## Step 2 — Create .devcontainer/install-kind.sh
Already done. Installs kind v0.23.0.

## Step 3 — Open in devcontainer
In VS Code: F1 → Dev Containers: Reopen in Container

## Step 4 — Verify all tools
node --version     # v20.x.x
docker info        # server info
kubectl version --client
helm version
kind --version     # 0.23.0

## Note for GitHub Codespaces users
Codespaces already provides an isolated environment. You can skip opening in a devcontainer — Node and Docker are available by default.

## Checkpoint
- [ ] node --version returns v20.x.x
- [ ] docker info returns server information
- [ ] kubectl version --client returns a version
- [ ] helm version returns a version
- [ ] kind --version returns 0.23.0
