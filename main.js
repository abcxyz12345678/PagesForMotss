const DEBUG = true

var express = require('express');
var util = require('util');
var app = express();
var swig  = require('swig');


app.engine('html', swig.renderFile);
app.set("view engine", "html");
app.set('views', (__dirname + '/views'));
// app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/public/'));

swig.setDefaults({ varControls: ['<<', '>>'] });

app.get('/*', function (req, res) {
	// console.log("req = ", req.params);
	var fileName = req.params['0'];
	console.log("fileName = "+fileName);
	if (DEBUG == true) swig.invalidateCache();
	if (fileName == "favicon.ico") {
		res.sendFile(__dirname + '/views/' + fileName);
	} else if (fileName.indexOf("component") > -1) {

	} else {
		// res.sendFile(__dirname + '/views/' + fileName + '/index.html')
		console.log("fileName2 = ", fileName);
		res.render(fileName);
	}
});



// app.get('/a/b/c/s', function (req, res) {
// 	// console.log(util.inspect(req, {showHidden: false, depth: null}))
// 	// console.log(req.url)
//
// 	/* send file */
//
// 	// var options = {
// 	// 	root: __dirname,
// 	// 	dotfiles: 'deny',
//   //   	headers: {
//   //       	'x-timestamp': Date.now(),
//   //       	'x-sent': true
//   //   	}
// 	// };
// 	// var fileName = req.url;
// 	// res.sendFile(fileName, options, function (err) {
// 	//     if (err) {
// 	//       console.log(err);
// 	//       res.status(err.status).end();
// 	//     }
// 	//     else {
// 	//       console.log('Sent:', fileName);
// 	//     }
// 	// });
//
//
// 	//// render swig html
// 	var fileName = req.url;
// 	console.log("url = ", fileName);
// 	res.render(__dirname+"/"+fileName);
// 	// var tpl = swig.compileFile(__dirname+fileName)
// 	// var renderedHtml = tpl({});
// 	// res.send(renderedHtml);
//
//
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
