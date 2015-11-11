(function() {
    var register = function(Handlebars) {

        /************* BEGIN HELPERS *************/
        var helpers = {
            json: function(obj) {
                return JSON.stringify(obj);
            }
        };
        /************* END HELPERS *************/

        if (Handlebars && typeof Handlebars.registerHelper === "function") {
            // register helpers
            for (var prop in helpers) {
                Handlebars.registerHelper(prop, helpers[prop]);
            }
        } else {
            // just return helpers object if we can't register helpers here
            return helpers;
        }
    };

    // client
    if (typeof window !== "undefined") {
        register(Handlebars);
    } else { // server
        module.exports.register = register;
        module.exports.helpers = register(null);
    }
})();
