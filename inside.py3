import os
import openai

one = input("Enter your opinion: ")

openai.api_key = "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"

messages = [{"role": "system", "content": "Find three different perspectives on the following topic:"}]
messages.append({"role": "user", "content": one})

answers = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages = messages
)

print(answers['choices'][0]['message']['content'])