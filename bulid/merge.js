var fs = require('fs');
var compressor = require('node-minify');


var data1 = fs.readFileSync('../src/html-editor.js', 'utf8');
var data2 = fs.readFileSync('../src/app.js', 'utf8');

var all =  data1 + data2 ;


fs.writeFileSync('all.js', all);


new compressor.minify({
    type: 'uglifyjs',
    fileIn: 'all.js',
    fileOut: 'all.min.js',
    callback: function(err, min){
        console.log('good!');
    }
});


