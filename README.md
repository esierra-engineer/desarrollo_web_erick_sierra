# Tarea 1
## Directory Tree
```
├── README.md
├── resources
│   ├── act_1.jpg
│   ├── act_2.jpg
│   ├── act_3.jpg
│   ├── act_4.jpg
│   └── act_5.jpg
└── src
    ├── css
    │   ├── addActivity.css
    │   └── styles.css
    ├── html
    │   ├── addActivity.html
    │   ├── index.html
    │   ├── listActivity.html
    │   └── statistics.html
    └── js
        ├── addActivity.js
        ├── charts.js
        ├── listActivities.js
        └── region_comuna.js

```
El codigo principal se encuentra en la carpeta src, ordenado por tipo de archivo. En la carpeta resources se dejan elementos de la pagina tales como imagenes.

Se uso una tabla con CSS en lugar de una \<table\> comun porque permite mejor adaptacion a otras resoluciones de pantalla. Existe un CSS general y uno especifico para addActivity.html

Cada pagina de la aplicacion tiene su propio codigo HTML y su propio codigo JS a excepción de la portada (index.html).

No alcancé a hacer el detalle en listActivity.html pero la idea es ocupar un dialog que se abra ante un evento onclick sobre cualquier elemento de la fila correspondiente a una actividad.

Tampoco alcancé a hacer la carga de 5 fotos pero la idea es agregar fotos y por cada foto agregada aumentar un contador que, cuando llegue a 5, inhabilite el boton o lo esconda.

Para statistics usé chart.JS para mostrar graficos mas lindos y con interacciones que una imagen o un plot de python.

