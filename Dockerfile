FROM nginx:latest
LABEL maintainer "yesok100@qq.com"
ADD ./dist/ /usr/share/nginx/html/
ADD dative.site.key /etc/nginx/
ADD dative.site_bundle.crt /etc/nginx/
ADD nginx.conf /etc/nginx/
EXPOSE 80
