// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp
    .src('css/scss/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
      }),
    )
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

// Tarefa de gulp para a função de SASS
gulp.task('sass', function (done) {
  compilaSass();
  done();
});

// Função para juntar o JS
function gulpJS() {
  return gulp
    .src('js/main/*.js')
    .pipe(concat('main.js'))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('mainjs', gulpJS);

// JS Plugins
function pluginJS() {
  return gulp
    .src(['js/plugins/*.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('pluginjs', pluginJS);

// Função para iniciar o browser
function browser() {
  browserSync.init({
    proxy: 'bikcraft.dev',
  });
}

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);

// Função de watch do Gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('js/main/*.js', gulpJS);
  gulp.watch('js/plugins/*.js', pluginJS);
  gulp.watch(['*.php', './**/*.php']).on('change', browserSync.reload);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task(
  'default',
  gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs', 'pluginjs'),
);
