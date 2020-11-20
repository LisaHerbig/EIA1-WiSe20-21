/* Emissionswerte der Kontinente */

/*Europa */
var europe08 : number = 4965.7;
var europe18 : number = 4208.3;

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

/*Konsolenausgabe*/
/*Europa*/
console.log('Die Emission von Europa ist: ' + europe18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + europaRelWelt + '%');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeEurope + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + europe8zu18 +' kg CO2');

/* NAmerika*/
console.log('Die Emission von Nordamerika ist: ' + namerica18 +' kg CO2');
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
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeafrica +'% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + africa8zu18 + ' kg CO2');

/*Asien*/
console.log('Die Emission von Asien ist: ' + asia18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + asiaRelWelt + '%');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + changeasia + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + asia8zu18 + ' kg CO2');

/*Australien*/
console.log('Die Emission von Australien ist ' + australia18 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + australiaRelWelt + '%');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' +  changeaustralia + '% verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + australia8zu18 + 'kg CO2');
