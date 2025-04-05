  const poblarDepartamentos = () => {
    let departmentSelect = document.getElementById("select-region");
    for (const department in region_comuna.regiones) {
        let option = document.createElement("option");

        // alert(department);
        option.value = department;
        option.text = region_comuna.regiones[department].nombre;
        departmentSelect.appendChild(option);
    }
  };
  
  const updateCursos = () => {
    let departmentSelect = document.getElementById("select-region");
    let courseSelect = document.getElementById("select-comuna");
    let selectedDepartment = departmentSelect.value;
    
    courseSelect.innerHTML = '<option value="">Seleccione una comuna</option>';

    //alert(region_comuna.regiones[selectedDepartment].nombre);
    
    if (region_comuna.regiones[selectedDepartment]) {
        region_comuna.regiones[selectedDepartment].comunas.forEach(comuna => {
            let option = document.createElement("option");
            option.value = comuna.nombre;
            option.text = comuna.nombre;
            courseSelect.appendChild(option);
        });
    }
    changeArguments();
  };
  
  function changeArguments() {
    const courseSelect = document.getElementById("select-course");
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
  
  document.getElementById("select-region").addEventListener("change", updateCursos);
  document.getElementById("select-comuna").addEventListener("change", changeArguments);
  document.getElementById("select-contact").addEventListener("change", updateContactInfo);
  document.getElementById("select-tema").addEventListener("change", updateTema);
  
  window.onload = () => {
    fillContact();
    fillTema();
    poblarDepartamentos();
    changeArguments();
  };