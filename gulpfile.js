var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    runSquence = require('run-sequence');

gulp.task('pack', function () {
    return gulp.src('./demo/Demo.react.js')
        .pipe(webpack({
            loaders: [
                {test: /\.(js|jsx)$/, loader: ['react-hot-loader', 'babel-loader']}
            ]
        }))
        .pipe(gulp.dest('./demo/demo.js'));
});

gulp.task('default', function () {
    runSquence('pack');
});
