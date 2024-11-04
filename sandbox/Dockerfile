# Pythonの軽量イメージを使用
FROM python:3.9-slim

# 作業ディレクトリを設定
WORKDIR /sandbox

# 実行スクリプトをコンテナにコピー
COPY runner.sh /sandbox/runner.sh
RUN chmod +x /sandbox/runner.sh

# エントリーポイントを設定
ENTRYPOINT ["./runner.sh"]
