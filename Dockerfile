FROM nginx:latest
LABEL maintainer "yesok100@qq.com"
ADD ./dist/ /usr/share/nginx/html/
ADD nginx.conf /etc/nginx/
EXPOSE 80
