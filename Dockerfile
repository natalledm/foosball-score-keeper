FROM nginx:alpine

COPY ["nginx-conf/default.conf", "/etc/nginx/conf.d/default.conf"]

COPY ["web/", "/usr/share/nginx/html"]

USER 1001
