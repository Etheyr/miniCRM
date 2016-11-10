$(document).ready(function(){

	"use strict";

	var app = {


		init: function(){

			app.recupJson();
			$('form').on('submit',this.recupInput.bind(this));
		},
		recupJson: function(){

			$.get('http://localhost:3450/crm.json',function(data){
				var menus = data.customers;
				for(var i = 0; i < menus.length; i++){
					$('#json').append('<div class="ui  segment"><p>'+menus[i].id+'</p><p>'+menus[i].first_name+'</p><p>'+menus[i].last_name+'</p><p>'+menus[i].company+'</p><p>'+menus[i].role+'</p><p>'+menus[i].phone+'</p><p>'+menus[i].email+'</p><p>'+menus[i].description+'</p></div>');


				}
			});
		},
		recupInput: function(event){

			event.preventDefault();

			var inputNom = $('#first_name').val();

			var inputPrenom = $('#last_name').val();

			var inputCompany = $('#company').val();

			var inputRole = $('#role').val();

			var inputNumero = $('#phone').val();

			var inputEmail = $('#email').val();

			var inputeArea = $('#description').val();

			this.submitForm({first_name:inputNom,
				last_name:inputPrenom,
				company:inputCompany,
				role:inputRole,
				phone:inputNumero,
				email:inputEmail,
				description:inputeArea});

		},
		submitForm : function(data){

			$.ajax({

				type :'POST',
				url : $("form").attr("action"),
				data : data,
				success : this.success
			});
		},
		success: function() {
			alert('Gg rumble'); 
		}


	}
	app.init();
});
