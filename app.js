'use strict'
let allPlaces = [];
function NewPlace(pname, tplace, toftransport) {
    this.pname = pname;
    this.tplace = tplace;
    this.toftransport = toftransport;
    allPlaces.push(this);
}
function renderTravel() {
    getFromlocal();
    clearlist();
    showListofPlace();
}
let bartOfform = document.getElementById('alldata');
let buttoncller = document.createElement('button');
buttoncller.innerHTML=('clear');
bartOfform.appendChild(buttoncller);

let submit = document.getElementById('submit')
submit.addEventListener('click', addNewplaces);

function addNewplaces(event) {
    event.preventDefault();
    let placename = document.getElementById('placename').value;

    let selectoption = document.getElementById('selectoption').value;
    console.log(selectoption);
    let typeoftransport = document.getElementById('typeoftransport').value;
    console.log();
    new NewPlace(placename, selectoption, typeoftransport);
    setTOlocalstorig();
    renderTravel();
    console.log("ssss");
}
function showListofPlace() {
    for (let i = 0; i < allPlaces.length; i++) {
        let viewallplace = document.getElementById('viewallplace');
        let div = document.createElement('div')
        let button = document.createElement('button');
        button.innerHTML = 'X';
        let image = document.createElement('img');
        let parg = document.createElement('p')
        parg.style.display = "inline";
        image.style.display = "inline";
        image.style.margin = "20px";
        image.setAttribute('width', 80);
        image.setAttribute('height', 80);
        image.src = "img/places/" + allPlaces[i].tplace + ".png"
        parg.setAttribute('style', 'white-space: pre;');
        parg.textContent = `Place Name:${allPlaces[i].pname}\r\nTrip Place:${allPlaces[i].tplace}\r\nTupe Of Transport:${allPlaces[i].toftransport}`;

        viewallplace.appendChild(div)
        div.appendChild(button);
        div.appendChild(image);
        div.appendChild(parg);
    }
}

function setTOlocalstorig() {
    localStorage.setItem('travelinf', JSON.stringify(allPlaces));
}

function getFromlocal() {
    allPlaces = [];
    allPlaces = JSON.parse(localStorage.getItem('travelinf')) || [];
}
function clearlist() {
    // allPlaces = []
    let viewallplace = document.getElementById('viewallplace');

  while (viewallplace.hasChildNodes()) {
    viewallplace.removeChild(viewallplace.firstChild);
  }

}
console.log(allPlaces);