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
    this.options = _.extend({
        file : {
            name : '',
            rename : false,
            stringCase : 'nc'
        },
        directory : {
            name : '',
            rename : false,
            stringCase : 'nc'
        }
    }, options);

}

Clonify.prototype = {

    execute : function () {
        var self = this;

        _.each(this.options.replaceValues, function (val) {

            self.compile(self.file, val);

        });

        if (this.options.file.rename) {

            this.file.path = this.renameFile(this.file.path, this.options)
        }

        if (this.options.directory.rename) {
            this.file.path = this.renameDir(this.file.path, this.options);
        }
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

    },

    renameFile : function (path, options) {

        var fname = options.clone;

        if (!_.isEmpty(options.file.name)) {
            fname = options.file.name;
        }

        var filename = path.replace(/^.*(\\|\/|\:)/, ''),
            r = []
            ;

        r[options.base] = fname;

        fname = this.str_replace_key(r, filename, { ci : true, stringCase : options.file.stringCase });

        return path.replace(filename, fname);

    },

    renameDir : function (path, options) {

        var fname = options.clone;

        if (!_.isEmpty(options.directory.name)) {
            fname = options.directory.name;
        }

        var r = []
            ;

        r[options.base] = fname;

        fname = this.str_replace_key(r, path, { ci : true, stringCase : options.directory.stringCase });

        return path.replace(path, fname);

    },

    str_replace_key : function (replacePairs, str, options) {

        options = _.extend({
            ci : false,
            stringCase : 'nc'
        }, options);

        var key, re;

        for (key in replacePairs) {
            if (replacePairs.hasOwnProperty(key)) {
                re = new RegExp(key, "g" + (options.ci ? "i" : ''));
                str = str.replace(re, replacePairs[key]);
            }
        }

        if (options.stringCase === 'lc') {

            return str.toLowerCase();

        } else if (options.stringCase === 'uc') {

            return str.toUpperCase();
        }

        return str;
    }
};


/**
 * Module Exports htmlToJson
 * @param p
 * @returns {*}
 */
module.exports = function(p) {

    p = _.extend({
        renameFile : false
    }, p);

    function doClone(file, callback) {

        if (file.isNull()) {
            throw new gUtil.PluginError('gulp-app-clonify', 'File is Null');
        }

        if (file.isStream()) {
            throw new gUtil.PluginError('gulp-app-clonify', 'stream not supported');
        }

        if (file.isBuffer()) {

            var cloner = new Clonify(file, p);

            cloner.execute();
        }

        callback(null, file);
    }

    return es.map(doClone)
};


