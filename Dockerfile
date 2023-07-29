# syntax=docker/dockerfile:1
FROM node:18-alpine as builder
WORKDIR /build
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /build/dist/bla-bla-land /usr/share/nginx/html
