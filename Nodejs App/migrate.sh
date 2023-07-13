#!/bin/bash
curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/books/_bulk?pretty' --data-binary @data.json 
