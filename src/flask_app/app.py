from flask import Flask, request, render_template, redirect, url_for, jsonify, flash
from database import db

UPLOAD_FOLDER = "static/uploads"

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = "clave_secreta_desarrollo"

# Ruta a la Portada de la página web 
@app.route("/", methods=["GET"])
def index():
    actividades = db.get_actividades(limit=5)
    return render_template("index.html", actividades=actividades)

@app.route("/addActivity", methods = ["GET", "POST"])
def add_activity():
    if request.method == "POST":
        datos, fotos, temas, contactos = []
        db.crear_actividad(datos, fotos=fotos, temas=temas, contactos=contactos)
        return redirect(url_for('index'))
    return render_template("addActivity.html")

@app.route("/viewList", methods = ["GET", "POST"])
def list_activity():
    return render_template("listActivity.html")

@app.route("/statistics", methods = ["GET", "POST"])
def statistics():
    return render_template("statistics.html")

if __name__ == "__main__":
    app.run(debug=True)
