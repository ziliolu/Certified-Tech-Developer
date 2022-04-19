const form =  document.querySelector("form"); 

form.addEventListener("submit", function (event) {
   event.preventDefault();
 
   const email = window.getValue("email");
   const password = window.getValue("password");
   const data = {
     email,
     password
   };

   window
   .chamadaApi("users/login", "POST", undefined, data)

   .then((dados) => localStorage.setItem("jwt", dados.jwt));
   window.location.href = 'tasks.html'
});
