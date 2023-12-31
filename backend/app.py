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

@app.route("/analyze", methods = ['POST'])
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
        
        if os.path.isfile("icdata.lc"): 
            os.remove("icdata.lc")
        if os.path.isfile("icdata.cdf"): 
            os.remove("icdata.cdf")
        if os.path.isfile("icdata.txt"): 
            os.remove("icdata.txt")

        return returnjsondata


@app.route("/classify", methods = ['POST'])
def classify():
    if request.method == 'POST':
        f = request.files['file']
        ext = os.path.splitext(f.filename)[-1]
        f.save("icdata" + ext)

        returndata = getClasses()
        jsonData = json.dumps(returndata, indent = 4)

        if os.path.isfile("icdata.lc"): 
            os.remove("icdata.lc")
        if os.path.isfile("icdata.cdf"): 
            os.remove("icdata.cdf")
        if os.path.isfile("icdata.txt"): 
            os.remove("icdata.txt")

        return jsonData

if __name__ == "__main__":
    app.run(debug= True)
