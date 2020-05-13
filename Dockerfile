FROM nginx


RUN rm /etc/nginx/conf.d/default.conf

#RUN rm /etc/nginx/conf.d/examplessl.conf

#COPY content /usr/share/nginx/html

COPY conf/default.conf /etc/nginx/conf.d/nginx.conf