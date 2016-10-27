"use strict";


var
    es      = require("event-stream"),
    gUtil   = require("gulp-util"),
    glob    = require('glob'),
    replace = require('gulp-replace'),
    _       = require('lodash')
;

function Clonify(file, options) {

    this.file = file;
    this.options = options;
}

Clonify.prototype = {

    init : function () {
        var self = this;

        _.each(this.options.replaceValues, function (val) {

            self.compile(self.file, val);

        });
    },

    compile : function (file, search) {

        if (search.key instanceof RegExp) {

            file.contents = new Buffer(String(file.contents).replace(search.key, search.value));

        } else {

            var chunks = String(file.contents).split(search.key);

            var result;

            if (typeof search.value === 'function') {
                // Start with the first chunk already in the result
                // Replacements will be added thereafter
                // This is done to avoid checking the value of i in the loop
                result = [ chunks[0] ];

                // The replacement function should be called once for each match
                for (var i = 1; i < chunks.length; i++) {
                    // Add the replacement value
                    result.push(search.value(search.key));

                    // Add the next chunk
                    result.push(chunks[i]);
                }

                result = result.join('');
            }
            else {
                result = chunks.join(search.value);
            }

            file.contents = new Buffer(result);

        }

    }
};


/**
 * Module Exports htmlToJson
 * @param p
 * @returns {*}
 */
module.exports = function(p) {

    p = p || {};

    function doClone(file, callback) {

        if (file.isNull()) {
            throw new gUtil.PluginError('gulp-app-clonify', 'File is Null');
        }

        if (file.isStream()) {
            throw new gUtil.PluginError('gulp-app-clonify', 'stream not supported');
        }

        if (file.isBuffer()) {

            var cloner = new Clonify(file, p);

            cloner.init();
        }

        callback(null, file);
    }

    return es.map(doClone)
};
