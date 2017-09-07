import sys
#fix it
sys.path.insert(0, './translation/')
import data_utils
from translate import *
from flask import Flask, render_template, request
app = Flask(__name__)


@app.route("/")
def main():
	return render_template("main_page.html")

@app.route("/translation", methods = ['POST'])
def translate():

	text = request.form['text']
	translated_article = translate_article(text)

	return translated_article

if __name__ == '__main__':
	app.run()