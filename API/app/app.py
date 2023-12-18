from flask import Flask, Blueprint

from routes import *
from db import Base, engine
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# register all blueprints from routes modules
[
    app.register_blueprint(route)
    for route in globals().values()
    if isinstance(route, Blueprint)
]

# create all tables from model
with app.app_context():
    Base.metadata.create_all(engine)

@app.route("/", methods=["GET"])

def getUser():
    return "hello"