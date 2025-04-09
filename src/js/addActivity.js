setInitialValues();

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
        option.value = opt;
        option.text = opt;
        contactSelect.appendChild(option);
    })
  }

  function updateContactInfo(){
    let contactSelect = document.getElementById("contact-input");

    if(!document.getElementById("contact-text-input")){
        let inputText = document.createElement("input");
        let inputLabel = document.createElement("label");

        inputText.setAttribute("id", "contact-text-input");
        inputText.setAttribute("name", "Usuario");
        inputText.setAttribute("maxlength", "50");
        
        inputLabel.setAttribute("for", "contact-text-input");
        inputLabel.innerText = "Usuario: ";
        
        contactSelect.appendChild(inputLabel);
        contactSelect.appendChild(inputText);
    }
    
  }

  function updateTema(){
    if (document.getElementById("select-tema").value == "otro"){
      let contactSelect = document.getElementById("tema-input");

    if(!document.getElementById("tema-text-input")){
        let inputText = document.createElement("input");
        let inputLabel = document.createElement("label");

        inputText.setAttribute("id", "tema-text-input");
        inputText.setAttribute("name", "Otro Tema");
        inputText.setAttribute("maxlength", "15");
        
        inputLabel.setAttribute("for", "tema-text-input");
        inputLabel.innerText = "Otro Tema: ";
        
        contactSelect.appendChild(inputLabel);
        contactSelect.appendChild(inputText);
    }
    }
  }

  function fillTema(){
    const theme_options = ["música", "deporte", "ciencias", "religión", "política", "tecnología", "juegos", "baile", "comida", "otro"]
    let themeSelect = document.getElementById("select-tema");
    theme_options.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt;
        option.text = opt;
        themeSelect.appendChild(option);
    })
  }

  function submit(){
    const dialog = document.querySelector("dialog");
    const closeButton = document.querySelector("dialog button");

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
      dialog.close();
    });

    if(validateInput()){
      dialog.showModal();
      
    } else{
      alert("El formulario contiene errores");
    };
  }

  function setInitialValues(){
    //alert("setting initial values");

    const init_date = document.getElementById("input-init-date");
    const end_date = document.getElementById("input-end-date");

    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    init_date.value = now.toISOString().slice(0,16);

    now.setMinutes(now.getMinutes() + 3*60);
    end_date.value = now.toISOString().slice(0,16);

    
  };

  function checkEmail(input){
    return {
      valid: 
      String(input.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) 
      && 
      !isEmpty(input), 
     message: isEmpty(input) ? `${input.name} vacio` : `formato incorrecto ${input.name}`
    };
  };

  function checkSector(input){
    return {
      valid: input.value.length < 100, 
      message: `formato incorrecto ${input.name}`
    } ;
  };

  function checkName(input){
    return {
      valid: input.value.length < 200 && !isEmpty(input), 
      message: isEmpty(input) ? `${input.name} vacio` : `formato incorrecto ${input.name}`
    } ;
  };

  function checkTel(input){
    output = {
      valid: String(input.value)
    .match(
      /^\+\d{3}\.\d{8}$/
    ) 
    || 
    isEmpty(input),
    message: `formato incorrecto ${input.name}`
    }
    return output;
  };

  function checkUser(input){
    return {
      valid: input.value.length < 51 && input.value.length > 3 && !isEmpty(input),
      message: isEmpty(input) ? `${input.name} vacio` : `formato incorrecto ${input.name}`
    };
  }

  function checkEndDate(input){
    const start_date = document.getElementById("input-init-date").value;
    return {
      valid: (input.value > start_date) && !isEmpty(input),
      message: isEmpty(input) ? `${input.name} vacio` : `${input.name} debe ser mayor que la Dia hora Inicio`
    };
  }

  function checkInputTheme(input){
    const theme = document.getElementById("select-tema");
    
    if(theme.value == "otro"){ 
        return {
          valid: !isEmpty(input) && input.value.length > 2 && input.value.length < 16,
          message: isEmpty(input) ? `${input.name} Vacio` : `formato incorrecto ${input.name}`
       }
    };
      return {valid: true, message: ""};
  }

  /**
   * Funcion para validar input
   * return: True si el formulario no tiene errores, False en cualquier otro caso
   */
  function validateInput(){
    //let checkRegion, checkComuna, checkSector, checkNombre, checkEmail, checkTel, checkContact, checkDateIni, checkDateEnd, checkTema, checkFoto = false;
       
    // Donde
    const region = document.getElementById("select-region");
    const comuna = document.getElementById("select-comuna");
    const sector = document.getElementById("input-text-sector")
    
    // Quien
    const name = document.getElementById("input-text-nombre");
    const email = document.getElementById("input-email");
    const tel = document.getElementById("input-tel");
    const contact = document.getElementById("select-contact");
    const input_contact = document.getElementById("contact-text-input");

    // Cuando
    const start_date = document.getElementById("input-init-date");
    const end_date = document.getElementById("input-end-date");
    const theme = document.getElementById("select-tema");
    const input_theme = document.getElementById("tema-text-input");
    const photo = document.getElementById("input-foto");

    //const required_inputs = [region, comuna, name, email, start_date, theme, photo];

    const validation_inputs = {
      region: region,
      comuna: comuna, 
      sector: sector,
      name: name,
      email: email,
      tel: tel,
      contact: contact,
      input_contact: input_contact,
      start_date: start_date,
      end_date: end_date,
      theme: theme,
      input_theme: input_theme,
      photo: photo
    };
  
    const checkNotEmpty = (input => {
      return {
        valid: !isEmpty(input),
        message: `${input.name} vacío`
      };
    })

    const validators = {
      region: checkNotEmpty,
      comuna: checkNotEmpty,
      sector: checkSector,
      name: checkName,
      email: checkEmail,
      tel: checkTel,
      contact: checkNotEmpty,
      input_contact: checkUser,
      start_date: checkNotEmpty,
      end_date: checkEndDate,
      theme: checkNotEmpty,
      input_theme: checkInputTheme,
      photo: checkNotEmpty
    };

    for (const [key, element] of Object.entries(validation_inputs)){
      console.log(`revisando elemento ${element?.name}`);
      let result = validators[key](element);
      if(!result.valid){
        toErrorDiv(result.message);
        return false;
      }
      console.log("element was ok");
    };
    return true;
  };

  /**
   * funcion para checkear un elemento vacio
   * @param {HTMLElement} element 
   * @returns true si el elemento no existe o esta vacio
   */
  function isEmpty(element){
    if (element != null){
      return element.value == "";
    }
    return true;
  }

  function toErrorDiv(text){
    let element = document.getElementById("error-msg");
    element.innerText = text;
  }

  function addGoBackButton(){
    const goBackButton = document.createElement("button");
    goBackButton.setAttribute("id", "btn-go-back");
    goBackButton.setAttribute("onclick", "window.location='index.html'");
    goBackButton.innerText = "Volver Atrás";
    
    document.getElementById("div-btn-goback").appendChild(goBackButton);    
};
  
  // selects
  document.getElementById("select-region").addEventListener("change", updateComunas);
  document.getElementById("select-comuna").addEventListener("change", changeArguments);
  document.getElementById("select-contact").addEventListener("change", updateContactInfo);
  document.getElementById("select-tema").addEventListener("change", updateTema);

  // submit button
  const dialog = document.getElementById("confirm-dialog");

  document.getElementById("btn-submit").addEventListener("click", (e) => {
    e.preventDefault();
    if (validateInput()) {
      dialog.showModal();
    }
  });

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "confirm") {
      alert("Formulario confirmado");
      addGoBackButton();
      // document.querySelector("form").submit();
    }
  });

  // subir otra imagen
  document.getElementById("input-foto").addEventListener("input", (e) => {
    if (!document.getElementById("btn-add-more")){
      const buttonAddMore = document.createElement("button");
      buttonAddMore.setAttribute("id", "btn-add-more");
      buttonAddMore.setAttribute("type", "file");
      buttonAddMore.innerText = "agregar otra foto";
      document.getElementById("div-more-photos").appendChild(buttonAddMore);
    }
  })

  window.onload = () => {
    fillContact();
    fillTema();
    poblarRegiones();
    changeArguments();
  };