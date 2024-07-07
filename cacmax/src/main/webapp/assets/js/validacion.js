function validar() {
    console.log('************validar()***************');
  
    const mailHardCodeado = 'cacmax@admin.com';
    const passwordHardCodeado = 'cacmax';
  
    var obtenerMailForm = document.getElementById('mail').value;
    var obtenerPswForm = document.getElementById('psw').value;
    console.log("Mail Form: " + obtenerMailForm);
    console.log("Psw Form: " + obtenerPswForm);
  
    if(mailHardCodeado == obtenerMailForm &&
      passwordHardCodeado == obtenerPswForm
     ) {
      alert('Las credenciales son correctas.');
      window.location.href = 'index.html'
      
      
    } else {
      alert('Las credenciales son incorrectas.');
      
    }
  }


