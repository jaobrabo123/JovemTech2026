import _ from 'lodash';

const notaMat = 7.6;
const notaPort = 9.3;
const notaCien = 5.0;

const media = _.mean([notaMat, notaPort, notaCien]);

console.log(`Sua média foi ${media}`);