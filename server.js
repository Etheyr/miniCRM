var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname +'/public'));
app.use(bodyParser());


app.post('/public', function(req,res){
	var post = req.body;
	var menuPath =__dirname +'/public/crm.json';


	fs.readFile(menuPath, 'utf8',function(err, data){


		var content = JSON.parse(data);
		console.log(typeof(content));
		content.customers.push({id: post.id,
			first_name: post.first_name,
			last_name: post.last_name,
			company: post.company,
			role: post.role,
			phone: post.phone,
			email: post.email,
			description: post.description});

		var json = JSON.stringify(content);


		fs.writeFile(menuPath, json,function(err){
			if(err){
				console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH');
			}
		});
	});
	res.json({message:'GG Rumble',status:'ok'});
	res.send('hello');
});
app.listen(3450, function () {
	console.log('Server started on port 3450!');
});