FROM golang

RUN go get github.com/gorilla/mux
RUN go get -u github.com/google/jsonapi

WORKDIR /api
