function l01() {    

    //lue etunimi ja tallenna muuttujaan
    let etunimi = document.getElementById("name1").value;
    // lue sukunimi ja tallenna muuttujaan
    let sukunimi = document.getElementById("name2").value;

//montako kertaa toistetaan, kerran
let toistojenMaara = 1;

// tulostetaan etunimi 
for(let i = 0; i < toistojenMaara; i++) {
    document.getElementById("first_name").innerHTML += etunimi + "<br/>";
}
let toistot = 0;

//tulostetaan sukunimi  
while(toistot < toistojenMaara) {

    //tulostetaan sukunimi + rivinvaihto oikeaan elementiin
    document.getElementById("last_name").innerHTML += sukunimi + "<br/>";

    //kasvatetaan toistot- muuttujan arvoa yhdellä
    toistot++;
}
}