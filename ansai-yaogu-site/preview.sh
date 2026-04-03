#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-4173}"
HOST="${HOST:-0.0.0.0}"
SITE_DIR="$(cd "$(dirname "$0")" && pwd)"

cat <<MSG
[preview] 安塞腰鼓站点已启动参数：
  HOST=${HOST}
  PORT=${PORT}
  DIR=${SITE_DIR}

[preview] 访问方式：
  - 本机终端运行脚本时： http://127.0.0.1:${PORT}
  - Docker/WSL/云开发环境：请使用端口转发后的地址（不要直接用容器内 127.0.0.1）

[preview] 按 Ctrl+C 停止服务
MSG

python3 -m http.server "${PORT}" --bind "${HOST}" --directory "${SITE_DIR}"
