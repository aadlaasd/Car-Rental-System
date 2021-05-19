let loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", function(){
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      $.ajax({
        url: "https://carrent-backend.herokuapp.com/login",
        type: "post",
        data: {
          email: email,
          password: password
        },
        success: function(result){
          let currentUser = {
            email: result[0].email,
            password: result[0].password,
            name: result[0].name,
            number: result[0].number,
            address: result[0].address
          }
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          location.href = "discover.html"
        },
        error: function(){
          console.log("error while login");
        }
      });
    })