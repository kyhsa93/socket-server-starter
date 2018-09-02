mkdir lib
babel index.js -o lib/index.js
babel src -d lib/src
cp api.build.json lib/package.json
cp package-lock.json lib/package-lock.json
cp docker-entrypoint.sh lib/docker-entrypoint.sh
cp nginx.conf lib/nginx.conf
cp config.json lib/config.json
