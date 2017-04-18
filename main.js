var exerciceUn = require('./exercice1.js');
var exerciceDeux = require('./exercice2.js');

console.log('Exercice1:');
console.log('Sync');
console.log(exerciceUn.nombreRadiateurs(6, 4, 2.4));
exerciceUn.nombreRadiateursAsync(2, 2, 2, function (resultat) {
    console.log('Async');
    console.log(resultat);
});
