from flask import Flask, request, jsonify
from flask_cors import CORS

import os
from openai import OpenAI

client = OpenAI(api_key="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")

app = Flask(__name__)
CORS(app)

@app.route("/members", methods = ['GET', 'POST'])

def members():
    prompt = request.get_json()
    
    messages = [{"role": "system", "content": "Find three different perspectives on the following topic:"}]
    messages.append({"role": "user", "content": prompt})

    answers = client.chat.completions.create(model="gpt-3.5-turbo",
    messages = messages)
    
    return jsonify({answers['choices'][0]['message']['content']})

if __name__ == "__main__":
    app.run(debug = True)
