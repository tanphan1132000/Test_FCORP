#!/bin/bash
curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:19200/books/_bulk?pretty' --data-binary @data.json 
