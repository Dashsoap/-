// 实现这个项目的构建任务

var {
    src,
    dest
} = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var babel = require('gulp-babel');

const style = () => {
    return src('src/assets/styles/*.scss', { base: "src" })
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(dest('dist'))
}
module.exports = {
    style
}