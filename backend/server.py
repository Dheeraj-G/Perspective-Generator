from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

import openai
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = openai.OpenAI()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type"]}})

@app.route("/get-members", methods=["GET"])
def get_members():
    return {"test": "test"}

@app.route("/post-members", methods=["POST", "OPTIONS"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'], methods=['POST'])
def post_members():
    print("handling regular")
    prompt = request.get_json()
   
    messages = [{"role": "system", "content": "Find three different perspectives on the following topic:"}]
    messages.append({"role": "user", "content": prompt["input"]})

    answers = client.chat.completions.create(model="gpt-3.5-turbo",
    messages = messages)

    output = answers.choices[0].message.content
   
    return jsonify({"test": output})

if __name__ == "__main__":
   app.run(port=8000, debug=True)