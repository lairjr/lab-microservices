FROM node:latest

WORKDIR /api

COPY yarn.lock package.json ./

RUN yarn
