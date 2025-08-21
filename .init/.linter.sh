#!/bin/bash
cd /home/kavia/workspace/code-generation/black-and-white-customer-management-162462-162471/customer_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

