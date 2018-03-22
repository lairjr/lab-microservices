FROM node:latest

WORKDIR /api

COPY yarn.lock package.json ./
COPY .babelrc ./

RUN yarn
