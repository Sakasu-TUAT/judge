# Pythonの軽量イメージを使用
FROM python:3.9-slim
# 作業ディレクトリを設定
WORKDIR /app
# 依存ファイルをコピーしてインストール
COPY requirements.txt .
RUN pip install -r requirements.txt
# アプリケーションコードをコピー
COPY app.py .
# Flaskサーバーを起動
CMD ["flask", "run", "--host=0.0.0.0"]
