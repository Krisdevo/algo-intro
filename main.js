

const voitures = [ //Tableau contenant nos voitures (4 propriétés)

    {nom : "voiture 1", marque :"bmw", annee : 2016, img: "images/3008.jpeg"},
    {nom : "voiture 2", marque :"peugeot", annee : 2018, img: "images/audi.jpg" },
    {nom : "voiture 3", marque :"audi", annee : 2017, img: "images/panda.jpg" }
]


//Fonction qui permet de créer des éléments et de les ajouter dans la liste(3propriétés)
function createAndStyleElement(tag,className,content=''){
    const element = document.createElement(tag);//creer un élément à partir de la propiété tag
    if (className)  element=className = className; // si la propriétés est remplie on lui ajoute la propriété en tant que classe.
    if (content)  element.innerHTML = content; //  si la propriété est remplie on la propriété en tant que contenu. 
    
    return element;//on retourne l'élément créé
 }

//Fonction permettant d'ajouter dynamiquement à partir d'une liste des voitures. 
function remplirListeDeVoiture(nom,marque,annee,img){

    const app = document.getElementById('list');//on récupère le conteneur par id(list)

    // on créer un élément de type div portant une clasas section et on injecte du HTML (h1,img;p,button) et on remplit les balises à partir des propriétés de la fonction remplirListeDeVoiture 
    const cardCar = createAndStyleElement('div', '', `

    <div id="container">
        <h1 id ="title"> ${nom} </h1>
        <img src= "${img}"  alt="" height="400" width="500">
        <p id ="text">${marque}</p>
        <button id="btn">${annee}</button>
    </div>
    
    `);


app.appendChild(cardCar);// on ajoute notre élément créer plus tôt à notre page

}

//Boucle qui passe à travers un tableau 
voitures.forEach(function(voiture){
    // Pour chaque voiture contenu dans voitures 
    remplirListeDeVoiture(voiture.nom, voiture.marque, voiture.annee,voiture.img);// ajoute à la fonction les propriéts des enfants de "voitures"
})










    
    
