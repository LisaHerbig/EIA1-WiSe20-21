/* Emissionswerte der Kontinente */
/*Europa */
var europe08 = 4965.7;
var europe18 = 4209.3;
/*North America*/
var namerica08 = 6600.4;
var namerica18 = 6035.6;
/*South America*/
var samerica08 = 1132.6;
var samerica18 = 1261.5;
/*Africa*/
var africa08 = 1028;
var africa18 = 1235.5;
/*Asia*/
var asia08 = 12954.7;
var asia18 = 16274.1;
/*Australia*/
var australia08 = 1993;
var australia18 = 2100.5;
/* Berechnung der Gesamtemission*/
var gesamtemission = europe18 + namerica18 + samerica18 + africa18 + asia18 + australia18;
/* Berechnung Emissionen Europa*/
var europaRelWelt = ((europe18 / gesamtemission) * 100).toFixed(2);
var changeEurope = (((europe18 / europe08) - 1) * 100).toFixed(2);
var europe8zu18 = (europe18 - europe08).toFixed(2);
/* Berechnung Emission NAmerika*/
var NamericaRelWelt = ((namerica18 / gesamtemission) * 100).toFixed(2);
var changeNamerica = (((namerica18 / namerica08) - 1) * 100).toFixed(2);
var Namerica8zu18 = (namerica18 - namerica08).toFixed(2);
/* Berechnung Emission SAmerika*/
var SamericaRelWelt = ((samerica18 / gesamtemission) * 100).toFixed(2);
var changeSamerica = (((samerica18 / samerica08) - 1) * 100).toFixed(2);
var Samerica8zu18 = (samerica18 - samerica08).toFixed(2);
/* Berechnung Emission Afrika */
var africaRelWelt = ((africa18 / gesamtemission) * 100).toFixed(2);
var changeafrica = (((africa18 / africa08) - 1) * 100).toFixed(2);
var africa8zu18 = (africa18 - africa08).toFixed(2);
/* Berechnung Emission Asien */
var asiaRelWelt = ((asia18 / gesamtemission) * 100).toFixed(2);
var changeasia = (((asia18 / asia08) - 1) * 100).toFixed(2);
var asia8zu18 = (asia18 - asia08).toFixed(2);
/* Berechnung Emission Australien */
var australiaRelWelt = ((australia18 / gesamtemission) * 100).toFixed(2);
var changeaustralia = (((australia18 / australia08) - 1) * 100).toFixed(2);
var australia8zu18 = (australia18 - australia08).toFixed(2);
/*Funktion und Event Listenter für Europa*/
function Europe() {
    document.getElementById("titleRegion").innerHTML = " Europe";
    document.getElementById("continentName").innerHTML = "Europe";
    document.getElementById("head1").innerHTML = europe18 + " kg CO2";
    document.getElementById("head2").innerHTML = europaRelWelt + "%";
    document.getElementById("head3").innerHTML = changeEurope + "%";
    document.getElementById("head4").innerHTML = europe8zu18 + " kg CO2";
    /*Balkendiagramm für Europa*/
    document.querySelector('.chart').setAttribute('style', 'height:' + europaRelWelt + "%");
}
document.querySelector(".europe").addEventListener('click', Europe);
/*Funktion und Event Listener für Nordamerika*/
function NorthAmerica() {
    document.getElementById("titleRegion").innerHTML = "North America";
    document.getElementById("continentName").innerHTML = "North America";
    document.getElementById("head1").innerHTML = namerica18 + " kg CO2";
    document.getElementById("head2").innerHTML = NamericaRelWelt + "%";
    document.getElementById("head3").innerHTML = changeNamerica + "%";
    document.getElementById("head4").innerHTML = Namerica8zu18 + " kg CO2";
    /*Balkendiagramm für NordAmerika*/
    document.querySelector('.chart').setAttribute('style', 'height:' + NamericaRelWelt + "%");
}
document.querySelector(".northamerica").addEventListener('click', NorthAmerica);
/*Funktion und Event Listener für Südamerika*/
function SouthAmerica() {
    document.getElementById("titleRegion").innerHTML = "South America";
    document.getElementById("continentName").innerHTML = "South America";
    document.getElementById("head1").innerHTML = samerica18 + " kg CO2";
    document.getElementById("head2").innerHTML = SamericaRelWelt + "%";
    document.getElementById("head3").innerHTML = changeSamerica + "%";
    document.getElementById("head4").innerHTML = Samerica8zu18 + " kg CO2";
    /*Balkendiagramm für Südamerika*/
    document.querySelector('.chart').setAttribute('style', 'height:' + SamericaRelWelt + "%");
}
document.querySelector(".southamerica").addEventListener('click', SouthAmerica);
/*Funktion und Event Listener für Afrika*/
function Africa() {
    document.getElementById("titleRegion").innerHTML = "Africa";
    document.getElementById("continentName").innerHTML = "Africa";
    document.getElementById("head1").innerHTML = africa18 + " kg CO2";
    document.getElementById("head2").innerHTML = africaRelWelt + "%";
    document.getElementById("head3").innerHTML = changeafrica + "%";
    document.getElementById("head4").innerHTML = africa8zu18 + " kg CO2";
    /*Balkendiagramm für Afrika*/
    document.querySelector('.chart').setAttribute('style', 'height:' + africaRelWelt + "%");
}
document.querySelector(".africa").addEventListener('click', Africa);
/*Funktion und Event Listener für Asien*/
function Asia() {
    document.getElementById("titleRegion").innerHTML = "Asia";
    document.getElementById("continentName").innerHTML = "Asia";
    document.getElementById("head1").innerHTML = asia18 + " kg CO2";
    document.getElementById("head2").innerHTML = asiaRelWelt + "%";
    document.getElementById("head3").innerHTML = changeasia + "%";
    document.getElementById("head4").innerHTML = asia8zu18 + " kg CO2";
    /*Balkendiagramm für Asien*/
    document.querySelector('.chart').setAttribute('style', 'height:' + asiaRelWelt + "%");
}
document.querySelector(".asia").addEventListener('click', Asia);
/*Funktion und Event Listener für Australien*/
function Australia() {
    document.getElementById("titleRegion").innerHTML = "Australia";
    document.getElementById("continentName").innerHTML = "Australia";
    document.getElementById("head1").innerHTML = australia18 + " kg CO2";
    document.getElementById("head2").innerHTML = australiaRelWelt + "%";
    document.getElementById("head3").innerHTML = changeaustralia + "%";
    document.getElementById("head4").innerHTML = australia8zu18 + " kg CO2";
    /*Balkendiagramm für Australien*/
    document.querySelector('.chart').setAttribute('style', 'height:' + australiaRelWelt + "%");
}
document.querySelector(".australia").addEventListener('click', Australia);
//# sourceMappingURL=script.js.map