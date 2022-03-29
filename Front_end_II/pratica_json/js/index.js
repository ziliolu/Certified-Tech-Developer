const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Percorra o JSON e insira os nomes dos membros na lista html
function percorrerMembros() {
  const json_js = JSON.parse(jsonData);
  const members = json_js.members;

  for(let i=0; i < members.length; i++){
    const li = document.createElement("li")
    const member = document.createTextNode(members[i].name);
    li.appendChild(member);
    document.querySelector('#membros').appendChild(li);
  }

}

percorrerMembros();
