FROM mcr.microsoft.com/devcontainers/base:alpine

# Install Python, Node.js, etc.
RUN apt-get update && apt-get install -y \
    python3 python3-pip curl git

# Optional: install Docker CLI if needed
RUN curl -fsSL https://get.docker.com | sh
