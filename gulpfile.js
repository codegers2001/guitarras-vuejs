const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {
    // identificar e archivo sass
    src('src/scss/app.scss')
    
    // compilarlo
    .pipe( sass() )
    
    // almacenar en el disco duro
    .pipe(dest("build/css"));

    done(); // callback que avisa a gulp cuando llegamos al final
}
function dev(done) {
    watch("src/scss/app.scss", css)
    done();
}

exports.css = css;
exports.dev = dev;