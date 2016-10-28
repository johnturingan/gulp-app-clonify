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

    var base = g.util.env.baseApp,
        clone = g.util.env.cloneApp
        ;

    return gulp.src('./app/Http/Controllers/' + base +'/**/*')
        .pipe(clonify({
            base : base,
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
 * Default
 */
gulp.task('clone-with-replace-filename', function () {

    var base = g.util.env.baseApp,
        clone = g.util.env.cloneApp
        ;

    return gulp.src([
            './resources/assets/app/**/' + base.toLowerCase() + '*.js',
            './resources/assets/app/**/' + base.toLowerCase() + '*.scss'
        ])
        .pipe(clonify({
            base : base,
            clone : clone,
            file : {
                rename : true,
                name : 'clone',
                stringCase : 'lc'
            },
            replaceValues : [
                {
                    key : '99uu',
                    value : 'newclone'
                },
                {
                    key : 'uu',
                    value : 'newclone'
                }
            ]
        }))
        .pipe(gulp.dest(function(file) {
            return file.base;
        }))
        .on('error', g.util.log)
        ;
});

/**
 * CLONE CONTROLLERS
 */
gulp.task('clone-controllers', function () {

    var base = g.util.env.baseApp,
        clone = g.util.env.cloneApp
        ;

    return gulp.src('./app/Http/Controllers/' + base +'/**/*')
        .pipe(clonify({
            base : base,
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

    var base = g.util.env.baseApp,
        clone = g.util.env.cloneApp
        ;

    return gulp.src('./app/Http/Routes/' + base +'/**/*')
        .pipe(clonify({
            base : base,
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


