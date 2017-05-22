'use strict';

angular.module('classe_a.controllers')
	.controller('ProductCtrl', ['$scope', 'parallaxHelper', 'Lightbox', function($scope, parallaxHelper, Lightbox) {

	this.slides = [{
		title: '',
		subtitle: '',
		imageUrl: '../images/slides/slide_produtos_01.jpg'
	}, {
		title: '',
		subtitle: '',
		imageUrl: '../images/slides/slide_produtos_02.jpg'
	}, {
		title: '',
		subtitle: '',
		imageUrl: '../images/slides/slide_produtos_03.jpg'
	}];

	this.background = parallaxHelper.createAnimator(-0.5);

	$scope.$on( '$viewContentLoaded', function(){

		jQuery('#carousel').carousel({
			pause: false
		});

	});

	Lightbox.templateUrl = 'views/lightbox.html';

	this.interfolha = [
		{
			'url': 'images/products/interfolhas/eco-800F.png',
			'caption': 'CLASSE A ECO',
			'medida': '20x21cm',
			'embalagem': 'Pacote c/ 800 folhas',
			'especificacao': '2 dobras. Folha Branca Simples',
			'cod': '7898642600015'
		},
		{
			'url': 'images/products/interfolhas/branco-plus-1000F.png',
			'caption': 'CLASSE A BRANCO PLUS',
			'medida': '20x21cm',
			'embalagem': 'Pacote c/ 1000 folhas',
			'especificacao': '2 dobras. Folha Simples Branca III',
			'cod': '7898642600022'
		},
		{
			'url': 'images/products/interfolhas/branco-800F.png',
			'caption': 'CLASSE A BRANCO',
			'medida': '20x21cm',
			'embalagem': 'Pacote c/ 800 folhas',
			'especificacao': '2 dobras. Folha Simples Branca II',
			'cod': '7898642600220'
		},
		{
			'url': 'images/products/interfolhas/premium-1000F.png',
			'caption': 'CLASSE A PREMIUM',
			'medida': '20x21cm',
			'embalagem': 'Pacote c/ 1000 folhas',
			'especificacao': '2 dobras. Folha Simples Branca II',
			'cod': '7898642600046'
		},
		{
			'url': 'images/products/interfolhas/branco-luxo-800F.png',
			'caption': 'CLASSE A BRANCO LUXO',
			'medida': '20x21cm',
			'embalagem': 'Pacote c/ 800 folhas',
			'especificacao': '2 dobras. Folha Simples Branca I',
			'cod': '7898642600237'
		},
		{
			'url': 'images/products/interfolhas/premium-plus-1000F.png',
			'caption': 'CLASSE A PREMIUM PLUS',
			'medida': '20x21cm',
			'embalagem': 'Pacote c/ 1000 folhas',
			'especificacao': '2 dobras. Folha Simples Branca II',
			'cod': '7898642600060'
		},
		{
			'url': 'images/products/interfolhas/100-celulose-800F.png',
			'caption': 'CLASSE A 100% CELULOSE',
			'medida': '20x21cm',
			'embalagem': 'Pacote c/ 800 folhas',
			'especificacao': '2 dobras. Folha Simples 100% Celulose',
			'cod': '7898642600244'
		},
		{
			'url': 'images/products/interfolhas/interfolha.png',
			'caption': 'CLASSE A BRANCO LUXO',
			'medida': '20x21cm',
			'embalagem': 'Caixa c/ 2000 folhas',
			'especificacao': '2 dobras. Folha Simples Branca I',
			'cod': '7898642600084'
		},
		{
			'url': 'images/products/interfolhas/interfolha.png',
			'caption': 'CLASSE A 100% CELULOSE',
			'medida': '20x21cm',
			'embalagem': 'Caixa c/ 2000 folhas',
			'especificacao': '2 dobras. Folha Simples 100% Celulose',
			'cod': '7898642600091'
		}
	];
	
	this.higienico = [
		{
			'url': 'images/products/higienico/eco.png',
			'caption': 'ECO 300 FD 8X150',
			'medida': '10cmx150m',
			'embalagem': 'Fardo c/ 8 rolos',
			'especificacao': 'Folha Simples Branca II',
			'cod': '7898642600107'
		},{
			'url': 'images/products/higienico/branco-plus.png',
			'caption': 'BRANCO PLUS',
			'medida': '10cmx300m',
			'embalagem': 'Fardo c/ 8 rolos',
			'especificacao': 'Folha Simples Branca II',
			'cod': '7898642600114'
		},{
			'url': 'images/products/higienico/premium.png',
			'caption': 'PREMIUM',
			'medida': '10cmx300m',
			'embalagem': 'Fardo c/ 8 rolos',
			'especificacao': 'Folha Simples Branca I',
			'cod': '7898642600138'
		},{
			'url': 'images/products/higienico/premium-plus.png',
			'caption': 'PREMIUM PLUS',
			'medida': '10cmx300m',
			'embalagem': 'Fardo c/ 8 rolos',
			'especificacao': 'Folha Simples 100% Celulose',
			'cod': '7898642600152'
		},{
			'url': 'images/products/higienico/higienico.png',
			'caption': 'BRANCO PLUS',
			'medida': '10cmx300m',
			'embalagem': 'Caixa c/ 8 rolos',
			'especificacao': 'Folha Simples Branca II',
			'cod': '7898642600121'
		},{
			'url': 'images/products/higienico/higienico.png',
			'caption': 'PREMIUM',
			'medida': '10cmx300m',
			'embalagem': 'Caixa c/ 8 rolos',
			'especificacao': 'Folha Simples Branca I',
			'cod': '7898642600145'
		},{
			'url': 'images/products/higienico/higienico.png',
			'caption': 'PREMIUM PLUS',
			'medida': '10cmx300m',
			'embalagem': 'Caixa c/ 8 rolos',
			'especificacao': 'Folha Simples 100% Celulose',
			'cod': '7898642600169'
		}
	];

	this.papel = [
		{
			'url': 'images/products/papel/bobina.png',
			'caption': 'BRANCO PLUS',
			'medida': '20cmx200m',
			'embalagem': 'Caixa c/ 6 rolos',
			'especificacao': 'Folha Simples Branca II',
			'cod': '7898642600190'
		},
		{
			'url': 'images/products/papel/bobina.png',
			'caption': 'PREMIUM',
			'medida': '20cmx200m',
			'embalagem': 'Caixa c/ 6 rolos',
			'especificacao': 'Folha Simples Branca I',
			'cod': '7898642600206'
		},
		{
			'url': 'images/products/papel/bobina.png',
			'caption': 'PREMIUM PLUS',
			'medida': '20cmx200m',
			'embalagem': 'Caixa c/ 6 rolos',
			'especificacao': 'Folha Simples 100% Celulose',
			'cod': '7898642600213'
		},
		{
			'url': 'images/products/papel/bobina.png',
			'caption': 'BRANCO PLUS',
			'medida': '20cmx100m',
			'embalagem': 'Caixa c/ 8 rolos',
			'especificacao': 'Folha Simples Branca II',
			'cod': '7898642600268'
		}
	];

	this.lencol = [
		{
			'url': 'images/products/lencol/hospitalar.png',
			'caption': '100% CELULOSE',
			'medida': '70cmx50m',
			'embalagem': 'Caixa c/ 10 rolos',
			'especificacao': 'Folha Simples 100% Celulose',
			'cod': '7898642600183'
		},
		{
			'url': 'images/products/lencol/hospitalar.png',
			'caption': 'BRANCO EXTRA LUXO',
			'medida': '70cmx50m',
			'embalagem': 'Caixa c/ 10 rolos',
			'especificacao': 'Folha Simples Branca I',
			'cod': '7898642600176'
		},
		{
			'url': 'images/products/lencol/hospitalar.png',
			'caption': 'BRANCO PLUS',
			'medida': '70cmx50m',
			'embalagem': 'Caixa c/ 10 rolos',
			'especificacao': 'Folha Simples Branca I',
			'cod': '7898642600251'
		}
	];

	$scope.openLightboxModal = function( items, index ){
		Lightbox.openModal( items, index );
	};

}]);