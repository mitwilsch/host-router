FROM nginx:latest
WORKDIR /app
ARG nginx_conf=nginx-prod.conf
ENV nginx_conf 'nginx-prod.conf'

COPY ./nginx/${nginx_conf} /etc/nginx/nginx.conf
