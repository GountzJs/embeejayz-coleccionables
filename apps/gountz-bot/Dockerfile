FROM node:20-alpine AS build

RUN npm install -g pnpm@10.22.0

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/gountz-bot/package.json ./apps/gountz-bot/

RUN pnpm fetch

COPY . .

RUN pnpm install --offline --frozen-lockfile

RUN pnpm nx build gountzbot

CMD ["pnpm", "nx", "start", "gountzbot"]