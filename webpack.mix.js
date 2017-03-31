const { mix } = require('laravel-mix');

mix.react('resources/assets/js/iot.js', 'public/js')
    .sass('resources/assets/sass/app.sass', 'public/css')
    .version();
