const addTask = function(){
    const url = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    const token = tokenForTask
    const task = {
      description: "estudar CSS",
      completed:  false
    }
  
    const promisse = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token
      },
      body: JSON.stringify(task)
    });
  
    promisse
      .then(function (response) {
        return response.json();
      })
      .then(function (taskPromisse) {
        console.log(taskPromisse);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  
  