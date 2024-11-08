from flask import Flask, request, jsonify
from flask_cors import CORS 
app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_code():
    code = request.form['code']
    # ここでコードをジャッジサーバーに送る処理を呼び出す
    result = judge_code(code)
    return jsonify(result)

def judge_code(code):
    # ジャッジサーバーでの評価処理を実装
    # 簡易的に仮の成功メッセージを返す
    return {"status": "success", "output": "Sample output"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

