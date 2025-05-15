

const voitures = [ //Tableau contenant nos voitures (4 propriétés)

    { nom: "voiture 1", marque: "bmw", annee: 2016, img: "images/3008.jpeg" },
    { nom: "voiture 2", marque: "peugeot", annee: 2018, img: "images/audi.jpg" },
    { nom: "voiture 3", marque: "audi", annee: 2017, img: "images/panda.jpg" }
]
const app = document.getElementById('list');//on récupère le conteneur par id(list)

//Fonction qui permet de créer des éléments et de les ajouter dans la liste(3propriétés)
function createAndStyleElement(tag, className, content = '') {
    const element = document.createElement(tag);//creer un élément à partir de la propiété tag
    if (className) element = className = className; // si la propriétés est remplie on lui ajoute la propriété en tant que classe.
    if (content) element.innerHTML = content; //  si la propriété est remplie on la propriété en tant que contenu. 

    return element;//on retourne l'élément créé
}



//Fonction qui affiche les résultats par bouton 
function init() {

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');

    btn1.addEventListener('click', () => {
        //Fonction qui vide la liste
        clearList()
        //Boucle qui passe à travers un tableau 
        voitures.forEach(function (voiture) {
            // Pour chaque voiture contenu dans voitures 
            remplirListeDeVoiture(voiture.nom, voiture.marque, voiture.annee, voiture.img);// ajoute à la fonction les propriéts des enfants de "voitures"
        });
    })

    btn2.addEventListener('click', () => {

        clearList()
        voitures.forEach(function (voiture) {
            //Fonction qui vide la liste

            // Pour chaque voiture contenu dans voitures 
            remplirMarque(voiture.marque);// ajoute à la fonction les propriéts des enfants de "voitures"
        });
    })

    btn3.addEventListener('click', () => {

        clearList()
        voitures.forEach(function (voiture) {
            //Fonction qui vide la liste

            // Pour chaque voiture contenu dans voitures 
            remplirNom(voiture.nom);// ajoute à la fonction les propriéts des enfants de "voitures"
        });
    })

    btn4.addEventListener('click', () => {
        clearList()
        voitures.forEach(function (voiture) {
            //Fonction qui vide la liste

            // Pour chaque voiture contenu dans voitures 
            remplirAnnee(voiture.annee);// ajoute à la fonction les propriéts des enfants de "voitures"
        });
    })
}

//Fonction permettant d'ajouter dynamiquement à partir d'une liste des voitures. 
function remplirListeDeVoiture(nom, marque, annee, img) {


    // on créer un élément de type div portant une clasas section et on injecte du HTML (h1,img;p,button) et on remplit les balises à partir des propriétés de la fonction remplirListeDeVoiture 
    const cardCar = createAndStyleElement('div', '', `

    <div id="container">
        <h1 id ="title"> ${nom} </h1>
        <img src= "${img}"  alt="" height="350" width="490">
        <p id ="text">${marque}</p>
        <button id="btn">${annee}</button>
    </div>   
    `);
    app.appendChild(cardCar);// on ajoute notre élément créer plus tôt à notre page

}

//Fonction qui affiche que les marques
function remplirMarque(marque) {
    const cardCar = createAndStyleElement('div', '', `
    <div id="container">
        <p id ="text">${marque}</p>
    </div>    
    `);
    app.appendChild(cardCar);// on ajoute notre élément créer plus tôt à notre page
}

//fonction qui affiche les noms
function remplirNom(nom) {
    const cardCar = createAndStyleElement('div', '', `
    <div id="container">
        <h1 id ="title"> ${nom} </h1>
    </div>
    
    `);
    app.appendChild(cardCar);
}

//fonction qui affiche les années
function remplirAnnee(annee) {
    const cardCar = createAndStyleElement('div', '', `

    <div id="container">
        <button id="btn">${annee}</button>
    </div>
    
    `);
    app.appendChild(cardCar);

}

//fonction qui vide la liste
function clearList() {
    const app = document.getElementById('list');
    app.innerHTML = '';
}


init();

