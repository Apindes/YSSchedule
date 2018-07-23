const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
module.exports = (parameters) => {
    return () => {
        const isProduction = process.env.NODE_ENV === "production";
        let stream = gulp.src(parameters.src, parameters.options);
        if (isProduction) {
            stream = stream.pipe($.imagemin());
        }
        return stream.pipe(gulp.dest(parameters.destination));
    };
};