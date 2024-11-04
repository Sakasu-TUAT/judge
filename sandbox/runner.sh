#!/bin/bash
CODE_PATH=/sandbox/code/code.py
if [ -f "$CODE_PATH" ]; then
    python3 "$CODE_PATH"
else
    echo "Error: code.py not found."
fi

