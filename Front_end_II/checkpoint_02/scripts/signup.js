const form = document.querySelector('#register');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const surname = document.querySelector('#surname').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  //JAVASCRIPT 
    const data = {
        firstName: name,
        lastName: surname,
        email: email,
        password: password
    }

  //REQUEST pedido
    const promise = window.chamadaApi('users', 'POST', undefined, data)

  //RESPONSE
  promise
    .then(function (userToken) {
      localStorage.setItem("token", userToken.jwt)
      window.location.href = 'tasks.html'
    })
    .catch(function (err) {
      console.log(err);
    });
});





