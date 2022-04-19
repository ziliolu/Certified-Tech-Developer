//criando variavel do endereço
window.enderecoApi = "https://ctd-todo-api.herokuapp.com/v1/"; 

//criando função que obtem o valor digitado no campo
window.getValue = function (elementId) {
   return document.getElementById(elementId).value;
};

window.chamadaApi = function (caminho, metodo, jwt, dados) {
   return (
     fetch(window.enderecoApi + caminho, {
       method: metodo,
       headers: {
         "Content-type": "application/json",
         authorization: jwt
       },
       body: JSON.stringify(dados)
     })
       .then(window.obterJSON)
       .catch((erro) => alert(erro))
   );
 };


window.obterJSON = (resposta) => {
   if (!resposta.ok) {
     // Cria um erro, no agumento dessa Classe a gente adiciona a mensagem que queremos exibir para o usuário
     let err = new Error(`HTTP: ${resposta.status}`);
     err.response = resposta;
     err.status = resposta.status;
 
     // Retorna o erro
     throw err;
   }
 
   // Retorna o JSON (para o próximo then) só se não passar pelo if
   return resposta.json();
 };