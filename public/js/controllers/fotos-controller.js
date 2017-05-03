angular.module('Galeria').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];

	$http.get('https://api.pokemontcg.io/v1/cards?series=base&pageSize=12')
	.success(function(retorno) {
		var imgArr = [];
		imgArr.push(retorno.cards);
		var newArr = imgArr[0].map(function (item) {
			return {
				titulo: item.name,
				url: item.imageUrl
			}
		});
		$scope.fotos = newArr;
	})
	.error(function(erro) {
		console.log(erro);
	});

});
