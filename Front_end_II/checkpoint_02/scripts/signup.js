const form2 = document.querySelector('#register');

form2.addEventListener('submit', function(event){
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
    const promise = fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  });

  //RESPONSE
  promise
    .then(function (response) {
      return response.json();
    })
    .then(function (afterResponse) {
      console.log(afterResponse);
    })
    .catch(function (err) {
      console.log(err);
    });

});


