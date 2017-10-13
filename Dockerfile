FROM golang

RUN go get github.com/gorilla/mux

WORKDIR /api
