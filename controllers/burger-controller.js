var express = require('express');
var burger = require("../models/burger.js");
var app = express.Router();

app.get("/", function(req,res){
	burger.all(function(data){
		var hbsburger = {
			burgers: data
		};
		console.log(hbsburger);
		res.render("index", hbsburger);		
	});
});

app.post("/", function(req,res){
	burger.create(["burger_name","devoured"],[req.body.name
	, req.body.devoured], function(){
		console.log(req.body);
		res.redirect('/');	
		// console.log("req.body" + req.body);
	});
});

app.put("/:id", function(req,res){
	console.log('reqbody' + JSON.stringify(req.body));
	var condition = 'id = ' + req.params.id;
	console.log(condition + "condition");
	burger.update({
		devoured: req.body.devoured},
		condition, function() {
		console.log(req.body);
	
		res.redirect('/');	
		
	});
});
module.exports = app;