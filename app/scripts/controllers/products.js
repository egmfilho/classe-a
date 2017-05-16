'use strict';

angular.module('classe_a.controllers')
	.controller('ProductCtrl', ['$scope', 'parallaxHelper', 'Lightbox', function($scope, parallaxHelper, Lightbox) {

	this.slides = [{
		title: 'Descubra-se, Reinvente-se!',
		subtitle: 'Papel Toalha Interfolha.',
		imageUrl: '../images/slides/slide1.jpg'
	}, {
		title: 'Produtos singulares',
		subtitle: 'O melhor custo respeitando suas necessidades.',
		imageUrl: '../images/slides/slide2.jpg'
	}, {
		title: 'Desenvolvido com alta qualidade',
		subtitle: 'Elaborado com fontes seguras e renováveis.',
		imageUrl: '../images/slides/slide3.jpg'
	}];

	this.background = parallaxHelper.createAnimator(-0.5);

	$scope.$on( '$viewContentLoaded', function(){

		jQuery('#carousel').carousel({
			pause: false
		});

	});

	Lightbox.templateUrl = 'views/lightbox.html';

	this.papel = [
		{
			'url': 'images/products/interfolhas/eco.png',
			'caption': 'ECO 20x21 c/ 1.000',
			'cod': '7898642600015'
		},{
			'url': 'images/products/interfolhas/branco-plus.png',
			'caption': 'Branco Plus 20x21 c/ 1.000',
			'cod': '7898642600022'
		},{
			'url': 'images/products/interfolhas/premium.png',
			'caption': 'Premium 20x21 c/ 1.000',
			'cod': '7898642600046'
		},{
			'url': 'images/products/interfolhas/premium-plus.png',
			'caption': 'Premium Plus 20x21 c/ 1.000',
			'cod': '7898642600060'
		}
	];
	
	this.higienico = [
		{
			'url': 'images/products/higienico/eco.png',
			'caption': 'ECO 300 8x150m',
			'cod': '7898642600107'
		},{
			'url': 'images/products/higienico/branco-plus.png',
			'caption': 'Branco Plus 8x300m',
			'cod': '7898642600114'
		},{
			'url': 'images/products/higienico/premium.png',
			'caption': 'Premium 8x300m',
			'cod': '7898642600138'
		},{
			'url': 'images/products/higienico/premium-plus.png',
			'caption': 'Premium Plus 8x300m',
			'cod': '7898642600152'
		}
	];

	this.caixa = [
		{
			'url': 'images/products/caixa/interfolha.png',
			'caption': 'Papel Interfolha',
			'items':[
				{
					'title': 'Luxo 20x21 c/ 2.000',
					'cod': '7898642600084'
				},{
					'title': '100% Celulose 20x21 c/ 2.000',
					'cod': '7898642600091'
				}
			]
		},{
			'url': 'images/products/caixa/higienico.png',
			'caption': 'Papel Higiênico Institucional',
			'items':[
				{
					'title': 'Branco Plus 8x300m',
					'cod': '7898642600121'
				},{
					'title': 'Premium 8x300m',
					'cod': '7898642600145'
				},{
					'title': 'Premium Plus 8x300m',
					'cod': '7898642600169'
				}
			]
		},{
			'url': 'images/products/caixa/bobina.png',
			'caption': 'Toalha de Papel em Bobina',
			'items':[
				{
					'title': 'Branco Plus 6x200m',
					'cod': '7898642600190'
				},{
					'title': 'Premium 6x200m',
					'cod': '7898642600206'
				},{
					'title': 'Premium Plus 6x200m',
					'cod': '7898642600213'
				}
			]
		},{
			'url': 'images/products/caixa/hospitalar.png',
			'caption': 'Lençol Hospitalar',
			'items':[
				{
					'title': 'Branco Extra Luxo 10x50m',
					'cod': '7898642600176'
				},{
					'title': '100% Celulose 10x50m',
					'cod': '7898642600183'
				}
			]
		}
	];

	$scope.openLightboxModal = function( items, index ){
		Lightbox.openModal( items, index );
	};

}]);