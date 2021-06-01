'use strict'
let imageofPlace = ['HAWAII', 'LONDON', 'PARIS', 'ITALY', 'SLOVAKIA', 'MALAYSIA']
let allPlaces = [];
function AllPlaces(pname, tplace, toftransport) {
    this.pname = pname;
    this.tplace = tplace;
    this.toftransport = toftransport;
    allPlaces.push(this);
}
function renderTravel() {
    getFromlocal();
    showListofPlace();
}

let submit = document.getElementById('submit')
submit.addEventListener('click', addNewplaces);

function addNewplaces(event) {
    event.preventDefault();
    let placename = document.getElementById('placename').value;
    let selectoption = document.getElementById('selectoption').value
    let typeoftransport = document.getElementById('typeoftransport').value;

    new AllPlaces(placename, selectoption, typeoftransport);
    setTOlocalstorig();
    renderTravel();
    console.log("ssss");
}
function showListofPlace() {
    for (let i = 0; i < allPlaces.length; i++) {
        let viewallplace = document.getElementById('viewallplace');
        let listOFplace = document.createElement('li');
        let image = document.createElement('img');
        image.style.display = "inline";
        image.setAttribute('width', 140);
        image.setAttribute('height', 140);
        for (let j = 0; j < imageofPlace.length; j++) {
            if (allPlaces[i].tplace === imageofPlace[j])
                listOFplace.textContent = `${imageofPlace[j]}  Place Name:${allPlaces[i].pname}\nTrip Place:${allPlaces[i].tplace}\nTupe Of Transport:${allPlaces[i].toftransport}`;
        }
        viewallplace.appendChild(listOFplace);
        listOFplace.appendChild(image);
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
    allPlaces = []

}
console.log(allPlaces);