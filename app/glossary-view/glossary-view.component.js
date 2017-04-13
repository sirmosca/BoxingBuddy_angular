"use strict";

angular.module("glossaryView").component("glossaryView", {
    templateUrl: "glossary-view/glossary-view.template.html",
    controller: [
        "Settings",
        "Combination",
        function GlossaryController(Settings, Combination) {
            var self = this;
            self.combos = [];
            Combination.query().$promise.then(function(resp) {
                angular.forEach(
                    resp,
                    function(value, key) {
                        this.push(value);
                    },
                    self.combos
                );
            });

            self.formatPunches = function(combo) {
                var output = "";
                for (var i=0; i < combo.snippet.length; i++) {
                    output += combo.snippet[i] + " (" + combo.punches[i] + "), ";
                }
                return output;
            }
        },
    ],
});
