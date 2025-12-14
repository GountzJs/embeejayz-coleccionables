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

COPY . .

RUN bun install --frozen-lockfile

RUN bun nx build gountzbot

CMD ["bun", "nx", "start", "gountzbot"]
