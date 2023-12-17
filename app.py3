import os
import openai
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('inside.html')

@app.route('/process', methods=['POST'])
def process():
    user_input = request.form['text_input']
    # Process the user input using your Python script
    output = process_text(user_input)
    return output

def process_text(text):
    # Your text processing logic goes here
    return text.upper()  # Example: Convert input to uppercase

if __name__ == '__main__':
    app.run(debug=True)

i = 0
while (i < 1):
    one = input("Enter your opinion: ")

    openai.api_key = "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"

    messages = [{"role": "system", "content": "Find three different perspectives on the following topic:"}]
    messages.append({"role": "user", "content": one})

    answers = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages = messages
    )

    print(answers['choices'][0]['message']['content'])
    
    two = input("Do you wish to continue? (y or n)")
    
    if(two == "y"):
        i = 1


