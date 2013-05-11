var fs = require( 'fs');
var marked = require( 'marked');

console.log( 'reading file: ' + process.argv[2] )
var input = fs.readFileSync( process.argv[2], {encoding:'utf8'} );

console.log( 'creating html')
var output = marked.parse( input );

var header = '\
<!DOCTYPE html>\
	<head>\
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-d5919c2c85462b6c3d5b24d94361e0cfe7c6d3c1.css" media="all" rel="stylesheet" type="text/css" />\
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-c199e1478f7546c043f0929b27d7f1688483a16d.css" media="all" rel="stylesheet" type="text/css" />\
	</head>\
	<body>\
		<div id="wiki-content">\
  		<div class="wrap">\
  			<div id="wiki-body" class="gollum-markdown-content instapaper_body">\
    			<div class="markdown-body">\
';

var footer = '\
	\
					</div>\
				</div>\
			</div>\
		</div>\
	</body>\
</html>\
;'


console.log( 'writing result: ' + process.argv[3] )
fs.writeFileSync( process.argv[3], header + output + footer, {encoding: 'utf8'} );

console.log( 'done' );

