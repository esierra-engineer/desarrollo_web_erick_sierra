function addGoBackButton(){
    const goBackButton = document.createElement("button");
    goBackButton.setAttribute("id", "btn-go-back");
    goBackButton.setAttribute("onclick", "window.location='index.html'");
    goBackButton.innerText = "Volver Atrás";
    
    document.getElementById("div-btn-goback").appendChild(goBackButton);    
};

function addGraphs(){
    const ctxLine = document.getElementById('myLineChart');
  
    new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['2025-03-01', '2025-03-02', '2025-03-03', '2025-03-04', '2025-03-05', '2025-03-06'],
        datasets: [{
          label: '# de Actividades por día',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctxPie = document.getElementById('myPieChart');
  
    new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: ['ciencia', 'deporte', 'musica'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3],
          borderWidth: 1
        }]
      }
    });

    const ctxBar = document.getElementById('myBarChart');
  
    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Mañana',
          data: [12, 19, 3, 5],
          borderWidth: 1
        },
        {
            label: 'Tarde',
            data: [25, 7, 10, 4],
            borderWidth: 1
          },
          {
            label: 'Mediodia',
            data: [11, 15, 9, 10],
            borderWidth: 1
          }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
};

window.onload = () => {
    addGoBackButton();
    addGraphs();
  };