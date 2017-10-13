package main

import (
    "github.com/gorilla/mux"
    "github.com/google/jsonapi"
    "log"
    "net/http"
)

type Program struct {
    ID         int      `jsonapi:"primary,program"`
    Program_ID string   `jsonapi:"attr,program_id"`
    Tenent_ID  string   `jsonapi:"attr,tenent_id"`
    Status     string   `jsonapi:"attr,status"`
}
var programs []*Program

// Display all from the programs var
func GetPrograms(w http.ResponseWriter, r *http.Request) {
    jsonapiRuntime := jsonapi.NewRuntime().Instrument("program")

    w.Header().Set("Content-Type", jsonapi.MediaType)
	  w.WriteHeader(http.StatusOK)

    if err := jsonapiRuntime.MarshalPayload(w, programs); err != nil {
		    http.Error(w, err.Error(), http.StatusInternalServerError)
	  }
}

// our main function
func main() {
  router := mux.NewRouter()
  program := new(Program)
  program.ID = 1
  program.Program_ID = "1234"
  program.Tenent_ID = "globosatPlay"
  program.Status = "ACTIVE"
  programs = append(programs, program)
  router.HandleFunc("/programs", GetPrograms).Methods("GET")
  log.Fatal(http.ListenAndServe(":3000", router))
}
