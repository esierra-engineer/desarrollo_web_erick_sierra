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