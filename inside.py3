import os
import openai

openai.api_key = "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"

messages = [{"role": "system", "content": "You are a virtual assistant"},{"role": "user", "content": "Enter your opinion"}]
#messages.append({"role": "user", "content": "Enter your opinion"})

answers = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages = messages
)

one = input("Enter your opinion: ")

print(answers['choices'][0]['message']['content'])