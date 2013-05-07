var fs = require( 'fs');
var marked = require( 'marked');

console.log( 'reading file: ' + process.argv[2] )
var input = fs.readFileSync( process.argv[2], {encoding:'utf8'} );

console.log( 'creating html')
var output = marked.parse( input );

console.log( 'writing result: ' + process.argv[3] )
fs.writeFileSync( process.argv[3], output, {encoding: 'utf8'} );

console.log( 'done' );

