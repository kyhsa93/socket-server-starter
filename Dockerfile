FROM ubuntu:16.04

# copy source
COPY ./lib /socket-server

WORKDIR /socket-server

RUN apt-get update && \
    apt-get -y install tzdata curl nginx netcat-openbsd && \
    ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime &&\
    curl -sL https://deb.nodesource.com/setup_9.x | bash && \
    apt-get install -y nodejs build-essential && \
    rm -rf /etc/nginx/sites-available/default && \
    cp nginx.conf /etc/nginx/sites-available/default && \
    service nginx reload && \
    npm install &&\
    chmod +x docker-entrypoint.sh

EXPOSE 80

# server start
ENTRYPOINT ./docker-entrypoint.sh
