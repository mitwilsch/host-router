FROM nginx:latest

COPY ./repos ./repos
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
