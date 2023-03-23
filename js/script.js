function login(){
    if(!username){
      Toastify({
        text: "Enter Your Full Name",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  
    }
      var username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
  
      console.log("username");
      
      if(email == "admin@user.com" && password == "123456"){

          window.location.href="home.html";
          
      }
      else{
          Toastify({
              text: "Invalid Email or Password!",
              duration: 3000,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function(){} // Callback after click
            }).showToast();
      }
  }
  function forget(){
    Toastify({
      text: "Try using 'admin@user.com' as email and '123456' as password",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }