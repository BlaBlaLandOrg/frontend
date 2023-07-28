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

RUN apk add --update certbot certbot-nginx curl

COPY nginx.conf /etc/nginx/nginx.conf
COPY blablaland.conf /etc/nginx/sites-enabled/blablaland.conf
VOLUME /etc/nginx/sites-enabled
COPY script.sh .
RUN chmod +x script.sh
COPY --from=builder /build/dist/bla-bla-land /usr/share/nginx/html
CMD ["./script.sh"]