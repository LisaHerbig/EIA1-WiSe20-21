/* Emissionswerte der Kontinente */
/*Europa */
var europe08 = 4965.7;
var europe18 = 4208.3;
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
/*Konsolenausgabe*/
/*Europa*/
console.log('Die Emission von Europa ist: ' + europe18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + europaRelWelt + '%');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeEurope + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + europe8zu18 + ' kg CO2');
/* NAmerika*/
console.log('Die Emission von Nordamerika ist: ' + namerica18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + NamericaRelWelt + '%');
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeNamerica + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + Namerica8zu18 + ' kg CO2');
/*SAmerika*/
console.log('Die Emission von Südamerika ist: ' + samerica18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + SamericaRelWelt + '%');
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeSamerica + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + Samerica8zu18 + ' kg CO2');
/*Afrika*/
console.log('Die Emission von Afrika ist: ' + africa18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + africaRelWelt + '%');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeafrica + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + africa8zu18 + ' kg CO2');
/*Asien*/
console.log('Die Emission von Asien ist: ' + asia18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + asiaRelWelt + '%');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeasia + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + asia8zu18 + ' kg CO2');
/*Australien*/
console.log('Die Emission von Australien ist ' + australia18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + australiaRelWelt + '%');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeaustralia + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + australia8zu18 + 'kg CO2');
//# sourceMappingURL=script.js.map