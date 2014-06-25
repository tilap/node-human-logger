var colors = require('colors');
var moment = require('moment');

module.exports = {
    log: function(message, object, color, previousText, space) {
        if(!color) {
            color = "black";
        }
        if(!space) {
            space = 'application';
        }

        var text = '['.white + space.green + '] '.white;
        text += moment().format('YYYY-MM-DD H:mm:ss').grey + ' ';
        text += previousText[color].bold + ' ';
        text += message[color];

        console.log(text);

        if (object) {
            console.log(JSON.stringify(object, null, 4)[color]);
        }
    },

    error: function(message, object, space) {
        this.log(message.stack || message.message || message, object, 'red', '✖', space);
    },

    warning: function(message, object, space) {
        this.log(message, object, 'yellow', '!', space);
    },

    success: function(message, object, space) {
        this.log(message, object, 'green', '✔', space);
    },

    info: function(message, object, space) {
        this.log(message, object, 'grey', '→', space);
    }
};
