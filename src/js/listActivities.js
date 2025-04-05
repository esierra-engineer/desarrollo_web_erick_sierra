function generateTable() {
    const ROWNUM = 5;
    const COLNUM = 6;
    const headers = ["Inicio", "Termino", "Comuna", "Sector", "Tema", "Nombre Organizador", "total fotos"];

    const rows = [
        ["2025-03-29 19:00", "2025-03-30 20:00", "Recoleta", "Clinica Davila", "Va pegao", "El Caezon", 1],
        ["2025-03-29 19:00", "2025-03-30 20:00", "Renca", "Cerro Renca", "Urban Music", "MC Noseque", 2],
        ["2025-03-29 19:00", "2025-03-30 20:00", "Puente Alto", "Municipalidad", "Carrera", "El Schumajer", 11],
        ["2025-03-29 19:00", "2025-03-30 20:00", "Santiago", "Plaza de Armas", "Nada", "Mario Desastres", 13],
        ["2025-03-29 19:00", "2025-03-30 20:00", "Vitacura", "Parque Generico", "Rave Cota 1000", "Perrito Zorron", 7]
    ];
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("div");
    tbl.setAttribute("class", "div-table")
    const tblBody = document.createElement("tbody");

    const rowHeader = document.createElement("div");
    rowHeader.setAttribute("class", "div-table-row-header")

    headers.forEach(title => {
        const cell = document.createElement("div");
        cell.setAttribute("class", "div-table-col")
        const cellText = document.createTextNode(title);
        cell.appendChild(cellText);
        rowHeader.appendChild(cell);
    })
    
    tblBody.appendChild(rowHeader);


  
    // creating all cells
    for (let i = 0; i < ROWNUM; i++) {
      // creates a table row
      const row = document.createElement("div");
      row.setAttribute("class", "div-table-row")
  
      for (let j = 0; j < COLNUM + 1; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("div");
        cell.setAttribute("class", "div-table-col");
        //alert(i)
        const cellText = document.createTextNode(rows[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <div>
    document.getElementById("div-content").appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }

  function addGoBackButton(){
    const goBackButton = document.createElement("button");
    goBackButton.setAttribute("id", "btn-go-back");
    goBackButton.setAttribute("onclick", "window.location='index.html'");
    goBackButton.innerText = "Volver Atrás";
    
    document.getElementById("div-btn-goback").appendChild(goBackButton);    
};
  
  window.onload = () => {
    generateTable()
    addGoBackButton()
  }