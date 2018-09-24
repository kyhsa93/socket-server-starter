# socket server start
socket server starter kit using socket.io

## Configuration
 * server config: [/config.json](/config.json)
 * babel config: [/.babelrc](/.babelrc)
 * eslint config: [/.eslintrc](/.babelrc)

## command and script file
```bash
    npm run build    # make archive zip file
    npm run doc      # make JSDoc
    npm run lint     # lint using eslint, babel
    npm run trans    # transpile to common js
    npm test         # run test code
    npm start        # start server with livereload
```
 * build: [/build.sh](build.sh)
 * test: [/test.sh](test.sh)
 * trans: [/transpile.sh](transpile.sh)

## using docker
```bash
    # if you want using docker, you have to run 'npm run trans' first
    docker build -t socket-server:<tag> .  # build docker image
    docker run -d -p 80:80 socket-server           # run docker container
```
 * entyPoint: [/docker-entrypoint.sh](docker-entrypoint.sh)
 * Dockerfile: [/Dockerfile](Dockerfile)
 * container's nginx.conf: [/nginx.conf](nginx.conf)
