from flask import Flask, request, jsonify
from flask_cors import CORS

from transformers import pipeline

sentiment_pipeline = pipeline("text-classification", model="cardiffnlp/twitter-roberta-base-sentiment-latest")
def analysis_sentiment(text):
    data = [text]
    analysis = sentiment_pipeline(data)[0]
    response = {'text': text,
             'label':analysis['label'],
             'score': analysis['score'] }

    return response

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/', methods=['GET', 'POST'])
def get_answer():
    if request.method == 'POST':
        text = request.form['text']
        analysis = analysis_sentiment(text)
    return jsonify(analysis)


if __name__ == '__main__':
    app.env = 'development'
    app.run(debug=True)