var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    runSquence = require('run-sequence');

gulp.task('pack', function () {
    return gulp.src('./demo/Demo.react.js')
        .pipe(webpack({
            watch: true,
            entry: {
                demo: './demo/Demo.react.js',
                tt: './demo/tt.react.js'
            },
            output: {
                filename: '[name].js'
            },
            module: {
                loaders: [
                    {test: /\.(es6|js|jsx)$/, loader: 'babel-loader'}
                ]
            }
        }))
        .pipe(gulp.dest('./demo/'));
});

gulp.task('default', function () {
    runSquence('pack');
});
