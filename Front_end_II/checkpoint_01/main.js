const form = document.querySelector("#form");
  
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    //seleção dos valores de input
    const user = form.elements['user'].value;
    const userText = document.createTextNode(user);
    const location = form.elements['location'].value;
    const locationText = document.createTextNode(location);
    const image = form.elements['image'].value;
    const imgText = document.createTextNode(image);
    const subtitle = form.elements['subtitle'].value;
    const subtitleText = document.createTextNode(subtitle);

    //criação das tags html
    const div = document.createElement('div');
    div.classList.add('card'); //add classe à div
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');

    //anexar
    img.setAttribute('src', image);
    document.querySelector('body').appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(img);
    div.appendChild(h3);
    h2.appendChild(userText);
    p.appendChild(locationText);
    h3.appendChild(subtitleText);
});
