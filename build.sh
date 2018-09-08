#!/bin/sh
./transpile.sh
DATE=$(date +%Y%m%d%H%M%S)
ARCHIVE=express.api.archive.$DATE
cd ./lib && zip -r ../$ARCHIVE.zip ./. && cd ..
