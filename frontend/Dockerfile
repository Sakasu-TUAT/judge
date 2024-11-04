# Node.jsの公式イメージを使用
FROM node:16
# 作業ディレクトリを設定
WORKDIR /app
# 依存ファイルをコピーしてインストール
COPY package.json .
COPY package-lock.json .
RUN npm install
# アプリケーションコードをコピー
COPY . .
# フロントエンド開発サーバーを起動
CMD ["npm", "start"]
