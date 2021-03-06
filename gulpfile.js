var gulp = require('gulp');
var critical = require('critical');

gulp.task('critical', function() {
  critical.generate({
    base: './src/',
    src: '_base/layout1.html',
    dest: '_base/layout.html',
    inline: true,
    minify: true,
    dimensions: [{
      height:200,
      width: 500
    },{
      height: 900,
      height: 1200
    }]
  });
});
