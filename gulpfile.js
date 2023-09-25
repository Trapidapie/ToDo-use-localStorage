const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));


gulp.task("build-sass", () => {
    return gulp
        .src("./scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"))
});

gulp.task("watch", () => {
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("build-sass"));
});

gulp.task(
    "build",
    gulp.parallel("build-sass")
)
gulp.task("prod", () => {
    return gulp
        .src("./src/scss/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest("/css"));
})

gulp.task("default", gulp.parallel("watch", "build"));