let inputMail = document.querySelector("#email");
let submitCard = document.querySelector(".submit-card");

let form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  if (validacion()) {
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      this.reset()
      mostrarModalSubmit();
    }
    inputNombre.value = "";
    inputMail.value = "";
  }
  else {
    return;
  }
}

function validacion() {
  // VALIDACION EMAIL
  let valorMail = inputMail.value;
  if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valorMail))) {
    //document.getElementById('mensaje').innerHTML = "No es una direccion de email correcta" ;        
    let elementoMail = document.getElementById('email');
    elementoMail.value = '';
    elementoMail.focus();
    alert("Ingrese Email valido!!");
    return false;
  }
  return true;
}

function mostrarModalSubmit() {
  submitCard.style.display = "flex";

  setTimeout(() => {
    submitCard.style.display = "none";
  }, 3500);

}