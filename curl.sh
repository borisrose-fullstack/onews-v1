#!/bin/bash
set -e

response=$(curl -s -X GET http://localhost:3000/api/articles)

jq_response=$(echo "$response" | jq .)

echo "$jq_response"
