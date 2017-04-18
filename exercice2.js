var async = require('Async');
module.exports = {
    convert: function (franc) {
        return franc / 6.55957;
    },
    convertAsync: function (franc, resultat) {
        return resultat(franc / 6.55957);

    },
    boucle: function () {
        var compteur;
        for (compteur = 10; compteur <= 1000; compteur += 50) {
            console.log(this.convert(compteur));
        }
    },

    boucleAsync: function () {
        var i = 0;
        var _that = this;
        async.whilst(
            function () {
                return i < 5;
            },
            function (callback) {
                i++;
                console.log(_that.convert(i));
                callback(null, i);
            },
            function (error) {
                console.log(error);
            }
        );
    }
}
