FROM node:10.7-alpine

RUN addgroup -g 1001 devgrp && adduser -u 1001 -D devusr -G devgrp
RUN mkdir -p /app /home/devusr/node_modules /home/devusr/.npm
RUN chown -R devusr:devgrp /app /usr/local /home/devusr/node_modules /home/devusr/.npm

WORKDIR /home/devusr/
USER 1001

ENV PATH "/home/devusr/node_modules/.bin:/home/devusr/.local/bin:$PATH"
ENV NODE_PATH "/home/devusr/node_modules:$NODE_PATH"
ENV NPM_CONFIG_LOGLEVEL=warn

EXPOSE 3000

COPY package*.json /home/devusr/
RUN npm cache verify
# RUN npm ci
RUN npm install

WORKDIR /app
COPY . /app

