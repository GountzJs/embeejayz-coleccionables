FROM alpine:3.20

RUN apk add --no-cache \
    bash \
    curl \
    ca-certificates \
    libc6-compat \
    libstdc++ \
    openssl

ENV BUN_INSTALL=/opt/bun
RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="$BUN_INSTALL/bin:$PATH"

WORKDIR /app

COPY package.json bun.lock nx.json ./
COPY apps/gountz-bot/package.json ./apps/gountz-bot/

RUN bun install --frozen-lockfile

COPY . .

RUN bun nx build gountzbot

CMD ["bun", "nx", "start", "gountzbot"]
