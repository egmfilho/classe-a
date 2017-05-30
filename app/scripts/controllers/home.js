'use strict';

angular.module('classe_a.controllers')
	.controller('HomeCtrl', ['$scope', 'parallaxHelper', function($scope, parallaxHelper) {

		this.slides = [{
			title: 'Produtos singulares',
			subtitle: 'O melhor custo respeitando suas necessidades.',
			imageUrl: '../images/slides/slide_home_06.jpg'
		}, {
			title: 'Desenvolvido com alta qualidade',
			subtitle: 'Elaborado com fontes seguras e renováveis.',
			imageUrl: '../images/slides/slide_home_07.jpg'
		}];

		this.background = parallaxHelper.createAnimator(-0.5);

		$scope.$on( '$viewContentLoaded', function(){

			jQuery('#carousel').carousel({
				pause: false
			});

		});

	}]);