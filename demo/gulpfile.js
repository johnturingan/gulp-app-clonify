/**
 * Created by isda on 16/09/2016.
 */

'use strict';

var gulp = require('gulp'),
    g = require('gulp-load-plugins')(),
    run = require('run-sequence'),
    clonify = require('../index.js')
    ;

/**
 * Default
 */
gulp.task('clone', function () {

    var host = g.util.env.baseApp,
        clone = g.util.env.cloneApp
        ;

    return gulp.src('./app/Http/Controllers/' + host +'/**/*')
        .pipe(clonify({
            host : host,
            clone : clone,
            replaceValues : [
                {
                    key : '\\Uu',
                    value : '\\Boyi'
                }
            ]
        }))
        .pipe(gulp.dest('./app/Http/Controllers/' + clone))
        .on('error', g.util.log)
        ;
});

/**
 * CLONE CONTROLLERS
 */
gulp.task('clone-controllers', function () {

    var host = g.util.env.baseApp,
        clone = g.util.env.cloneApp
        ;

    return gulp.src('./app/Http/Controllers/' + host +'/**/*')
        .pipe(clonify({
            host : host,
            clone : clone,
            replaceValues : [
                {
                    key : '\\Uu',
                    value : '\\NewClone'
                }
            ]
        }))
        .pipe(gulp.dest('./app/Http/Controllers/' + clone))
        .on('error', g.util.log)
        ;
});

/**
 * CLONE ROUTES
 */
gulp.task('clone-routes', function () {

    var host = g.util.env.baseApp,
        clone = g.util.env.cloneApp
        ;

    return gulp.src('./app/Http/Routes/' + host +'/**/*')
        .pipe(clonify({
            host : host,
            clone : clone,
            replaceValues : [
                {
                    key : 'Uu\\',
                    value : 'NewClone\\'
                }
            ]
        }))
        .pipe(gulp.dest('./app/Http/Routes/' + clone))
        .on('error', g.util.log)
        ;
});

/**
 * CLONE ALL APPLICATION
 */
gulp.task('clone-app' , function(){
    run('clone-controllers', 'clone-routes');
});


