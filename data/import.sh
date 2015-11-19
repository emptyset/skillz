#!/bin/sh

HOST=localhost
PORT=27017
DB=test

SOURCE=skills_normalized.json

mongoimport --host $HOST:$PORT --db $DB --drop --collection developers --file $SOURCE --jsonArray 
