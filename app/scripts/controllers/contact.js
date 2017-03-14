'use strict';

angular.module('classe_a.controllers')
	.controller('ContactCtrl', ['$http', '$httpParamSerializerJQLike', 'NgMap', function($http, $httpParamSerializerJQLike, NgMap) {

		var self = this;

		NgMap.getMap().then(function(map) {
			self.map = map;
		});

		function validar() {
			var isValid = true;

			jQuery('input, textarea').removeClass('warning-input');
			
			if (!self.name) {
				jQuery('input[ng-model="contact.name"]').addClass('warning-input');
				isValid = false;
			}

			if (!self.email && ! self.tel) {
				if (!self.email) {
					jQuery('input[ng-model="contact.email"]').addClass('warning-input');
					isValid = false;
				}

				if (!self.tel) {
					jQuery('input[ng-model="contact.tel"]').addClass('warning-input');
					isValid = false;
				}
			}

			if (!self.city) {
				jQuery('input[ng-model="contact.city"]').addClass('warning-input');
				isValid = false;
			}

			if (!self.msg) {
				jQuery('textarea[ng-model="contact.msg"]').addClass('warning-input');
				isValid = false;
			}

			return isValid;
		}

		this.sendMessage = function() {
			if (!validar()) {
				alert('Preencha corretamente todos os campos!');
				return;
			}

			$http({
				url: '/contact.php',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: $httpParamSerializerJQLike({
					name: this.name,
					email: this.email,
					telephone: this.tel,
					city: this.city,
					message: this.msg
				})
			}).then(function(success) {
				alert('Mensagem enviada!');
			}, function(error) {
				console.log(error);
				alert('Não foi possível enviar a mensagem');
			});
		};

	}]);