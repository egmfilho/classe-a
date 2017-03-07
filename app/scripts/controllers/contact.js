'use strict';

angular.module('classe_a.controllers')
	.controller('ContactCtrl', ['$http', 'NgMap', function($http, NgMap) {

		var self = this;

		NgMap.getMap().then(function(map) {
			self.map = map;
		});

		this.sendMessage = function() {
			return;
			
			if (!this.name || !this.message || (!this.email || this.tel)) {
				return;
			}

			$http({
				method: 'POST',
				headers: {
					'content-type': 'x-www-form-url'
				},
				data: {
					name: this.name,
					email: this.email,
					telephone: this.tel,
					message: this.msg
				}
			}).then(function(success) {
				alert('Mensagem enviada!');
			}, function(error) {
				console.log(error);
				alert('Não foi possível enviar a mensagem');
			});
		};

	}]);