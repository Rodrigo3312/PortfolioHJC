
      for (let index = 0; index <10; index++) {
       console.log(index);

    }
     function saludar(){
      let user = document.getElementById("txtUser").value;
       let pass = document.getElementById("txtPass").value;
       alert("Te damos la bienvenida " + user);
      console.log("tu password no es secreta...mira: " + pass);

     }
     function sumar(){
       let n1 = parseInt(document.getElementById("txtUser").value);
       let n2 = parseInt(document.getElementById("txtPass").value);
       alert("la suma es: " + (n1 + n2));
     }

    