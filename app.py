from flask import Flask, jsonify, render_template
import flask_sqlalchemy
import config
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/data")
def data():
    return jsonify({"data":"is empty"})

if __name__ == "__main__":
    app.run()