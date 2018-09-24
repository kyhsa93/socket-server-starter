#!/bin/sh
./transpile.sh
DATE=$(date +%Y%m%d%H%M%S)
ARCHIVE=socket.server.archive.$DATE
cd ./lib && zip -r ../$ARCHIVE.zip ./. && cd ..
