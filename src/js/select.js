  const poblarRegiones = () => {
    let comunaSelect = document.getElementById("select-region");
    for (const comuna in region_comuna.regiones) {
        let option = document.createElement("option");

        // alert(department);
        option.value = comuna;
        option.text = region_comuna.regiones[comuna].nombre;
        comunaSelect.appendChild(option);
    }
  };
  
  const updateComunas = () => {
    let regionSelect = document.getElementById("select-region");
    let comunaSelect = document.getElementById("select-comuna");
    let selectedRegion = regionSelect.value;
    
    comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>';

    //alert(region_comuna.regiones[selectedDepartment].nombre);
    
    if (region_comuna.regiones[selectedRegion]) {
        region_comuna.regiones[selectedRegion].comunas.forEach(comuna => {
            let option = document.createElement("option");
            option.value = comuna.nombre;
            option.text = comuna.nombre;
            comunaSelect.appendChild(option);
        });
    }
    changeArguments();
  };
  
  function changeArguments() {
    const comunaSelect = document.getElementById("select-course");
  }

  function fillContact(){
    const contact_options = ["WhatsApp", "Telegram", "X", "Instagram", "TikTok", "Otra"]
    let contactSelect = document.getElementById("select-contact");
    contact_options.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt
        option.text = opt
        contactSelect.appendChild(option)
    })
  }

  function updateContactInfo(){
    let contactSelect = document.getElementById("contact-input");

    if(!document.getElementById("contact-text-input")){
        let inputText = document.createElement("input");
        let inputLabel = document.createElement("label")

        inputText.setAttribute("id", "contact-text-input")
        inputText.setAttribute("maxlength", "50")
        
        inputLabel.setAttribute("for", "contact-text-input")
        inputLabel.innerText = "Usuario: "
        
        contactSelect.appendChild(inputLabel);
        contactSelect.appendChild(inputText);
    }
    
  }

  function updateTema(){
    let contactSelect = document.getElementById("tema-input");

    if(!document.getElementById("tema-text-input")){
        let inputText = document.createElement("input");
        let inputLabel = document.createElement("label")

        inputText.setAttribute("id", "tema-text-input")
        inputText.setAttribute("maxlength", "15")
        
        inputLabel.setAttribute("for", "tema-text-input")
        inputLabel.innerText = "Otro Tema: "
        
        contactSelect.appendChild(inputLabel);
        contactSelect.appendChild(inputText);
    }

  }

  function fillTema(){
    const theme_options = ["música", "deporte", "ciencias", "religión", "política", "tecnología", "juegos", "baile", "comida", "otro"]
    let themeSelect = document.getElementById("select-tema");
    theme_options.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt
        option.text = opt
        themeSelect.appendChild(option)
    })
  }

  function submit(){
     alert("Hemos recibido su información, muchas gracias y suerte en su actividad")
  }

  function setInitialValues(){
    //alert("setting initial values");

    const init_date = document.getElementById("input-init-date")
    const end_date = document.getElementById("input-end-date")

    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    init_date.value = now.toISOString().slice(0,16);

    now.setMinutes(now.getMinutes() + 3*60);
    end_date.value = now.toISOString().slice(0,16);

    $(function() {
      $("#dialog-confirm").dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Sí, estoy seguro": function() {
            $(this).dialog("close");
            if (!document.getElementById("btn-go-back")){
              submit()
              const goBackButton = document.createElement("button")
              goBackButton.setAttribute("id", "btn-go-back")
              goBackButton.setAttribute("onclick", "window.location='index.html'")
              goBackButton.innerText = "Volver Atrás"
  
              document.getElementById("div-btn-goback").appendChild(goBackButton)
            }
          },
          "No, no estoy seguro": function() {
            $(this).dialog("close");
          }
        }
      });
      $( "#btn-submit" ).on( "click", function() {
        $( "#dialog-confirm" ).dialog( "open" );
      });
    });
  }
  
  // selects
  document.getElementById("select-region").addEventListener("change", updateComunas);
  document.getElementById("select-comuna").addEventListener("change", changeArguments);
  document.getElementById("select-contact").addEventListener("change", updateContactInfo);
  document.getElementById("select-tema").addEventListener("change", updateTema);

  // submit button
  //document.getElementById("btn-submit").addEventListener("click", submit);
  
  window.onload = () => {
    setInitialValues();
    fillContact();
    fillTema();
    poblarRegiones();
    changeArguments();
  };