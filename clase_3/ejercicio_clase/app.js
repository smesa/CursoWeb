var app = angular.module('store',[]);
var gems = [
	{
		name: 'Dodecahedron1',
		price: 2000.95,
		description: 'Praesent vel augue malesuada, facilisis purus non, lacinia metus. In pulvinar, augue nec lobortis ullamcorper, ligula ipsum molestie dui, vitae convallis eros dolor vitae nunc. Nullam at mi sed dui lacinia viverra ullamcorper in mauris. Sed a felis risus. In fringilla, urna at pretium faucibus, sem dolor aliquam lectus, eget egestas turpis est sit amet arcu. Vivamus interdum ultricies purus, non bibendum dolor blandit tempor. Donec laoreet odio sit amet vulputate malesuada.',
		canPurchase: false,
		soldOut: false,
		shippingDate: new Date(),
		readmore: 20,
		class: 'red',
		img: './img/dodecahedron.jpg'
	},
	{
		name: 'Gema pentagonal1',
		price: 5.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula fringilla lobortis. Etiam scelerisque neque ac lorem venenatis egestas. Aliquam commodo euismod odio at ornare. Nullam tristique vitae justo ac suscipit. Aliquam dolor sapien, eleifend at euismod ut, vestibulum in est. In vitae porta risus. Morbi sed nunc diam. Sed laoreet sapien nec odio varius pulvinar. Curabitur ut enim cursus, cursus est ut, consequat turpis. Sed tristique sit amet purus id mattis. Mauris bibendum elit ipsum, in fermentum ante vestibulum non. Donec sed odio felis. In pulvinar elit eu nibh placerat, vel sagittis ex semper.',
		canPurchase: false,
		soldOut: false,
		readmore: 40,
		img: './img/pentagonal.png'
	},
		{
		name: 'Dodecahedron2',
		price: 2000.95,
		description: 'Praesent vel augue malesuada, facilisis purus non, lacinia metus. In pulvinar, augue nec lobortis ullamcorper, ligula ipsum molestie dui, vitae convallis eros dolor vitae nunc. Nullam at mi sed dui lacinia viverra ullamcorper in mauris. Sed a felis risus. In fringilla, urna at pretium faucibus, sem dolor aliquam lectus, eget egestas turpis est sit amet arcu. Vivamus interdum ultricies purus, non bibendum dolor blandit tempor. Donec laoreet odio sit amet vulputate malesuada.',
		canPurchase: false,
		soldOut: false,
		shippingDate: new Date(),
		readmore: 20,
		class: 'red',
		img: './img/dodecahedron.jpg'
	},
	{
		name: 'Gema pentagonal2',
		price: 5.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula fringilla lobortis. Etiam scelerisque neque ac lorem venenatis egestas. Aliquam commodo euismod odio at ornare. Nullam tristique vitae justo ac suscipit. Aliquam dolor sapien, eleifend at euismod ut, vestibulum in est. In vitae porta risus. Morbi sed nunc diam. Sed laoreet sapien nec odio varius pulvinar. Curabitur ut enim cursus, cursus est ut, consequat turpis. Sed tristique sit amet purus id mattis. Mauris bibendum elit ipsum, in fermentum ante vestibulum non. Donec sed odio felis. In pulvinar elit eu nibh placerat, vel sagittis ex semper.',
		canPurchase: false,
		soldOut: false,
		readmore: 40,
		img: './img/pentagonal.png'
	},
		{
		name: 'Dodecahedron3',
		price: 2000.95,
		description: 'Praesent vel augue malesuada, facilisis purus non, lacinia metus. In pulvinar, augue nec lobortis ullamcorper, ligula ipsum molestie dui, vitae convallis eros dolor vitae nunc. Nullam at mi sed dui lacinia viverra ullamcorper in mauris. Sed a felis risus. In fringilla, urna at pretium faucibus, sem dolor aliquam lectus, eget egestas turpis est sit amet arcu. Vivamus interdum ultricies purus, non bibendum dolor blandit tempor. Donec laoreet odio sit amet vulputate malesuada.',
		canPurchase: false,
		soldOut: false,
		shippingDate: new Date(),
		readmore: 20,
		class: 'red',
		img: './img/dodecahedron.jpg',
	},
	{
		name: 'Gema pentagonal3',
		price: 5.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula fringilla lobortis. Etiam scelerisque neque ac lorem venenatis egestas. Aliquam commodo euismod odio at ornare. Nullam tristique vitae justo ac suscipit. Aliquam dolor sapien, eleifend at euismod ut, vestibulum in est. In vitae porta risus. Morbi sed nunc diam. Sed laoreet sapien nec odio varius pulvinar. Curabitur ut enim cursus, cursus est ut, consequat turpis. Sed tristique sit amet purus id mattis. Mauris bibendum elit ipsum, in fermentum ante vestibulum non. Donec sed odio felis. In pulvinar elit eu nibh placerat, vel sagittis ex semper.',
		canPurchase: false,
		soldOut: false,
		readmore: 40,
		img: './img/pentagonal.png'
	}
]

app.controller('StoreController',function(){
	this.products = gems;
})
