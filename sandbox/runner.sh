#!/bin/bash

# code.pyはバックエンドからマウントされる予定の提出コードファイル
if [ -f "code.py" ]; then
  # 実行して結果を標準出力
  python3 code.py
else
  echo "Error: code.py not found."
fi
