document.querySelector("button").addEventListener("click",Function);
    var userData = JSON.parse(localStorage.getItem("userCreds"))||[];
    function Function(){
        // console.log("hii");
        var userObj = {
      userName: document.querySelector("#user").value,
      contact: document.querySelector("#contact").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#pass").value,
      
    };
    userData.push(userObj);
    console.log(userData)
    localStorage.setItem("userCreds",JSON.stringify(userData))
    window.location.href = "index.html";
  }
