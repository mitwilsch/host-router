FROM nginx


RUN rm /etc/nginx/nginx.conf

#RUN rm /etc/nginx/conf.d/examplessl.conf

#COPY content /usr/share/nginx/html

COPY conf /etc/nginx

