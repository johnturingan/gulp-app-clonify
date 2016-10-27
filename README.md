# [gulp](http://gulpjs.com)-app-clonify

>Clone application files or directory with the capability to replace all existence of a key value pair you defined in the settings

>Can be useful if you want to generate new codebase similar to an existing just the only difference is their namespace or something. or generate a new codebase base on your template.

> To run Demo:
>
```
$ cd demo
$ gulp clone --baseApp=Uu --cloneApp=NewClone
```
Just make sure the you already install all node modules including Dev Dependencies

Install :traffic_light:
-------

```bash
$ npm install gulp-app-clonify --save
```


## Pipe :neckbeard:

Like any other gulp plugin, transformed source files will flow onward to the destination of your choice.

In your gulpfile.js

**`/gulpfile.js`**

```javascript
var gulp = require('gulp');
var clonify = require('gulp-app-clonify);

gulp.task('clone', function(){
        gulp.src('path/to/the/directory/you/want/to/clone/**/*')
            .pipe(clonify({
		            replaceValues : [
		                {
		                    key : 'stringYouWantToChange',
		                    value : 'newValueAfterChange'
		                },
		                {
		                    key : 'couldBeARegularExpression',
		                    value : 'newValueAfterChange'
		                }
		            ]
		        }))
            .pipe(gulp.dest('.'))


```

## Options

As of now, there is only 1 option that you can use:

* `replaceValues`
    * array of key value object
    	* key : Can be a string or a regular expression
    	* value : string



## Usage

You may look at the demo for clearer understanding of how can you use this module.


----
**[MIT](LICENSE) LICENSE** <br>
copyright &copy; 2016 Scripts and Pixels.
