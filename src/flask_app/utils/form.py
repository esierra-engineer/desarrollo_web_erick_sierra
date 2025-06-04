# Evitar inyecciones SQL y XSS, sanitizando los inputs
import hashlib
import os
import re
import filetype
from werkzeug.utils import secure_filename


def sanitizar_input(texto: str) -> str:
    """
    Removes potentially dangerous or unwanted parts from a text string.
    """
    if not texto:
        # if the input is empty or None, return an empty string
        return "" 

    # remove all HTML tags (like <b>, <div>, etc.)
    texto = re.sub(r"<.*?>", "", texto)

    # remove <script> tags and their content, case-insensitive and multi-line
    texto = re.sub(r"(?i)<script.*?</script>", "", texto, flags=re.DOTALL)

    # remove single and double quotes
    texto = texto.replace("'", "").replace('"', "")

    # remove semicolons and double dashes (often used in SQL injection)
    texto = texto.replace(";", "").replace("--", "")

    # remove leading and trailing whitespace
    texto = texto.strip()
    
    return texto


def process_form(request, app):
    datos = {
        "comuna_id": request.form.get("select-comuna"),
        "sector": sanitizar_input(request.form.get("input-text-sector", "")),
        "nombre": sanitizar_input(request.form.get("input-text-nombre", "")),
        "email": sanitizar_input(request.form.get("input-email", "")),
        "celular": sanitizar_input(request.form.get("input-tel", "")),
        "dia_hora_inicio": request.form.get("input-init-date"),
        "dia_hora_termino": request.form.get("input-end-date"),
        "tema": request.form.get("select-tema"),
        "descripcion": sanitizar_input(request.form.get("input-text-descripcion", "")),
        "contacto": request.form.get("select-contact")
    }
    if datos["dia_hora_termino"] == "":
        datos["dia_hora_termino"] = None

    return datos