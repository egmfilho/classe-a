'use strict';

angular.module('classe_a.controllers')
	.controller('ContactCtrl', ['$rootScope', '$http', '$httpParamSerializerJQLike', 'NgMap', function($rootScope, $http, $httpParamSerializerJQLike, NgMap) {

		var self = this;

		this.modal = {
			title: '',
			message: ''
		};

		NgMap.getMap().then(function(map) {
			self.map = map;
		});

		this.limpar = function(){
			self.name = '';
			self.email = '';
			self.tel = '';
			self.city = '';
			self.msg = '';
		}

		this.sendMessage = function( $event ) {
			
			$event.stopPropagation();
			$event.preventDefault();

			$rootScope.loading.load();

			$http({
				url: 'contact.php',
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
				self.limpar();
				self.modal.title = 'Tudo certo :)';
				self.modal.message = 'TOALHAS CLASSE A agradece o seu contato. Retornaremos o mais breve possível.';
				$rootScope.loading.unload();
				jQuery('#modal').modal('show');
			}, function(error) {
				self.limpar();
				self.modal.title = 'Ops!';
				self.modal.message = 'Não foi possível enviar a sua mensagem! Tente novamente mais tarde.';
				$rootScope.loading.unload();
				jQuery('#modal').modal('show');
			});

		};

	}]);