const rows = [
  [1, "2025-03-29 19:00", "2025-03-30 20:00", "Recoleta", "Clinica Davila", "Va pegao", "El Chupa", 1],
  [2, "2025-03-29 19:00", "2025-03-30 20:00", "Renca", "Cerro Renca", "Urban Music", "MC Noseque", 2],
  [3, "2025-03-29 19:00", "2025-03-30 20:00", "Puente Alto", "Municipalidad", "Carrera", "El Schumajer", 11],
  [4, "2025-03-29 19:00", "2025-03-30 20:00", "Santiago", "Plaza de Armas", "Nada", "Mario Desastres", 13],
  [5, "2025-03-29 19:00", "2025-03-30 20:00", "Vitacura", "Parque Generico", "Rave Cota 1000", "Perrito Zorron", 7]
];

function generateTable() {
    const ROWNUM = 5;
    const COLNUM = 6;
    const headers = ["Inicio", "Termino", "Comuna", "Sector", "Tema", "Nombre Organizador", "total fotos"];

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

      // Asignar evento onclick a la fila
      row.addEventListener("click", (e) => {
        //alert(`Haz hecho clic en la fila ${i + 1}`);
        e.preventDefault();
        dialog.showModal();
        showrowinfo(i);
      });
  
      for (let j = 1; j < COLNUM + 2; j++) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "div-table-col");
        const cellText = document.createTextNode(rows[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    tbl.appendChild(tblBody);
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

function showrowinfo(i){
  document.getElementById("row-inicio").innerText = rows[i][1];
  document.getElementById("row-termino").innerText = rows[i][2];
  document.getElementById("row-comuna").innerText = rows[i][3];
  document.getElementById("row-sector").innerText = rows[i][4];
  document.getElementById("row-tema").innerText = rows[i][5];
  document.getElementById("row-name").innerText = rows[i][6];
  document.getElementById("row-total-photos").innerText = rows[i][7];

  const rowPhotos = document.getElementById("row-photos");
  const title = document.createElement("h1");
  title.innerText = "Fotos";
  rowPhotos.appendChild(title);

  for(let j = 0; j < rows[i][7]; ++j){
    const myImage = new Image(320, 240);
    myImage.src = "../../resources/act_5.jpg";
    
    const newCol = document.createElement("div");
    
    newCol.setAttribute("class", "div-table-col show-photos");
    newCol.addEventListener("click", (e) => {
      const pic_dialog = document.getElementById("show-picture");
      const pictureContainer = document.getElementById("picture-container");
      pictureContainer.innerHTML = '';
      
      const myImage = new Image(800, 600);
      myImage.src = "../../resources/act_5.jpg";
      pictureContainer.appendChild(myImage);
      
      pic_dialog.showModal();
    })
    newCol.appendChild(myImage);
    rowPhotos.appendChild(newCol);
  }
}

document.getElementById("btn-close").addEventListener("click", (e) => {
  document.getElementById('row-photos').innerHTML = ""; 
});

const dialog = document.getElementById("show-activity-dialog");

  window.onload = () => {
    generateTable()
    addGoBackButton()
  }