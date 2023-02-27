#!/bin/bash
docker build --pull -f docker/node.dockerfile --build-arg PROJECT=kickflip-api -t kickflip-api .
docker save kickflip-api:latest > kickflip-prod.tar