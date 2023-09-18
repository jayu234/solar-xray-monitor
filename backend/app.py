from flask import Flask, render_template, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
from model import returnable
from flare import getClasses
import json
import os

app = Flask(__name__)
CORS(app)


@app.route("/", methods = ['POST', 'GET'])
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/upload", methods = ['POST'])
def uploader():
    if request.method == 'POST':
        f = request.files['file']
        ext = os.path.splitext(f.filename)[-1]
        # f.save(secure_filename(f.filename))
        f.save("icdata" + ext)

        # try:
        returndata = returnable(ext)
        print(type(returndata))
        returnjsondata = json.dumps(returndata)
        print(type(returnjsondata))
        return returnjsondata


@app.route("/classify", methods = ['POST'])
def classify():
    if request.method == 'POST':
        if not os.path.isfile("icdata.lc"):
            f = request.files['file']
            ext = os.path.splitext(f.filename)[-1]
            # f.save(secure_filename(f.filename))
            f.save("icdata" + ext)

        returndata = getClasses()
        print(type(returndata))
        returnjsondata = json.dumps(returndata)
        print(type(returnjsondata))
        return returnjsondata

if __name__ == "__main__":
    app.run(debug= True)
