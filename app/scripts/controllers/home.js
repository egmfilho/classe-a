'use strict';

angular.module('classe_a.controllers')
	.controller('HomeCtrl', [function() {

		this.slides = [{
			title: 'Descubra-se, Reinvente-se!',
			subtitle: 'Papel Toalha Interfolha.',
			// imageUrl: 'http://fullhdpictures.com/wp-content/uploads/2017/01/Nature-Wallpaper-Free.jpg'
			imageUrl: '../images/slides/slide1.jpg'
		}, {
			title: 'Produtos singulares',
			subtitle: 'O melhor custo respeitando suas necessidades.',
			// imageUrl: 'http://fullhdpictures.com/wp-content/uploads/2016/11/Full-HD-Prairie-Wallpaper.jpg'
			imageUrl: '../images/slides/slide2.jpg'
		}, {
			title: 'Desenvolvido com alta qualidade',
			subtitle: 'Elaborado com fontes seguras e renováveis.',
			imageUrl: '../images/slides/slide3.jpg'
		}]

	}]);