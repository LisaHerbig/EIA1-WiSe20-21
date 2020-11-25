/* Emissionswerte der Kontinente */

/*Europa */
var europe08 : number = 4965.7;
var europe18 : number = 4209.3;

/*North America*/
var namerica08 : number = 6600.4;
var namerica18 : number = 6035.6;

/*South America*/
var samerica08 : number = 1132.6;
var samerica18 : number = 1261.5;

/*Africa*/
var africa08 : number = 1028;
var africa18 : number = 1235.5;

/*Asia*/
var asia08 : number = 12954.7;
var asia18 : number = 16274.1;

/*Australia*/
var australia08 : number = 1993;
var australia18 : number = 2100.5;

/* Berechnung der Gesamtemission*/
var gesamtemission : number = europe18 + namerica18 + samerica18 + africa18 + asia18 + australia18;

/* Berechnung Emissionen Europa*/
var europaRelWelt : string = ((europe18/gesamtemission)*100).toFixed(2);
var changeEurope : string = (((europe18/europe08)-1)*100).toFixed(2); 
var europe8zu18 : string = (europe18 - europe08).toFixed(2); 

/* Berechnung Emission NAmerika*/
var NamericaRelWelt : string = ((namerica18/gesamtemission)*100).toFixed(2);
var changeNamerica : string = (((namerica18/namerica08)-1)*100).toFixed(2);
var Namerica8zu18 : string = (namerica18 - namerica08).toFixed(2);

/* Berechnung Emission SAmerika*/
var SamericaRelWelt : string = ((samerica18/gesamtemission)*100).toFixed(2);
var changeSamerica : string = (((samerica18/samerica08)-1)*100).toFixed(2);
var Samerica8zu18 : string = (samerica18 - samerica08).toFixed(2);

/* Berechnung Emission Afrika */
var africaRelWelt : string = ((africa18/gesamtemission)*100).toFixed(2);
var changeafrica : string = (((africa18/africa08)-1)*100).toFixed(2);
var africa8zu18 : string = (africa18 - africa08).toFixed(2);

/* Berechnung Emission Asien */
var asiaRelWelt : string =((asia18/gesamtemission)*100).toFixed(2);
var changeasia : string = (((asia18/asia08)-1)*100).toFixed(2);
var asia8zu18 : string = (asia18 - asia08).toFixed(2);

/* Berechnung Emission Australien */
var australiaRelWelt : string = ((australia18/gesamtemission)*100).toFixed(2);
var changeaustralia : string = (((australia18/australia08)-1)*100).toFixed(2);
var australia8zu18 : string = (australia18 - australia08).toFixed(2);


/*Funktion und Event Listenter für Europa*/
function Europe () {
document.getElementById ("titleRegion").innerHTML=" Europe";
document.getElementById ("continentName").innerHTML= "Europe";
document.getElementById ("head1").innerHTML= europe18 + " kg CO2";
document.getElementById ("head2").innerHTML= europaRelWelt + "%";
document.getElementById ("head3").innerHTML= changeEurope + "%";
document.getElementById ("head4").innerHTML= europe8zu18 + " kg CO2";
/*Balkendiagramm für Europa*/
document.querySelector('.chart').setAttribute ('style', 'height:' + europaRelWelt + "%");

}
document.querySelector(".europe").addEventListener('click', Europe)


/*Funktion und Event Listener für Nordamerika*/
function NorthAmerica () {
    document.getElementById ("titleRegion").innerHTML= "North America";
    document.getElementById ("continentName").innerHTML= "North America";
    document.getElementById ("head1").innerHTML= namerica18 + " kg CO2"
    document.getElementById ("head2").innerHTML= NamericaRelWelt + "%";
    document.getElementById ("head3").innerHTML= changeNamerica + "%";
    document.getElementById ("head4").innerHTML= Namerica8zu18 + " kg CO2";
    /*Balkendiagramm für NordAmerika*/
    document.querySelector('.chart').setAttribute ('style', 'height:' + NamericaRelWelt + "%");
}
document.querySelector(".northamerica").addEventListener('click', NorthAmerica)

/*Funktion und Event Listener für Südamerika*/
function SouthAmerica () {
    document.getElementById ("titleRegion").innerHTML="South America";
    document.getElementById ("continentName").innerHTML= "South America";
    document.getElementById ("head1").innerHTML= samerica18 + " kg CO2";
    document.getElementById ("head2").innerHTML= SamericaRelWelt + "%";
    document.getElementById ("head3").innerHTML= changeSamerica + "%";
    document.getElementById ("head4").innerHTML= Samerica8zu18 + " kg CO2";
    /*Balkendiagramm für Südamerika*/
    document.querySelector('.chart').setAttribute ('style', 'height:' + SamericaRelWelt + "%");
}
document.querySelector(".southamerica").addEventListener('click', SouthAmerica)

/*Funktion und Event Listener für Afrika*/
function Africa () {
    document.getElementById ("titleRegion").innerHTML= "Africa";
    document.getElementById ("continentName").innerHTML="Africa";
    document.getElementById ("head1").innerHTML= africa18 + " kg CO2";
    document.getElementById ("head2").innerHTML= africaRelWelt + "%";
    document.getElementById ("head3").innerHTML= changeafrica + "%";
    document.getElementById ("head4").innerHTML= africa8zu18 + " kg CO2";
    /*Balkendiagramm für Afrika*/
    document.querySelector('.chart').setAttribute ('style', 'height:' + africaRelWelt + "%");
}
document.querySelector (".africa").addEventListener('click', Africa)

/*Funktion und Event Listener für Asien*/
function Asia () {
    document.getElementById ("titleRegion").innerHTML= "Asia";
    document.getElementById ("continentName").innerHTML= "Asia";
    document.getElementById ("head1").innerHTML= asia18 + " kg CO2";
    document.getElementById ("head2").innerHTML= asiaRelWelt + "%";
    document.getElementById ("head3").innerHTML= changeasia + "%";
    document.getElementById ("head4").innerHTML= asia8zu18 + " kg CO2";
    /*Balkendiagramm für Asien*/
    document.querySelector('.chart').setAttribute ('style', 'height:' + asiaRelWelt + "%");
}
document.querySelector(".asia").addEventListener('click', Asia)

/*Funktion und Event Listener für Australien*/
function Australia () {
    document.getElementById ("titleRegion").innerHTML= "Australia";
    document.getElementById ("continentName").innerHTML= "Australia";
    document.getElementById ("head1").innerHTML= australia18 +" kg CO2";
    document.getElementById ("head2").innerHTML= australiaRelWelt + "%";
    document.getElementById ("head3").innerHTML= changeaustralia + "%";
    document.getElementById ("head4").innerHTML= australia8zu18 + " kg CO2";
    /*Balkendiagramm für Australien*/
    document.querySelector('.chart').setAttribute ('style', 'height:' + australiaRelWelt + "%");
}
document.querySelector (".australia").addEventListener('click', Australia)

