angular.module('Galeria').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = []; 

	// $http.get('/v1/fotos');
	// promise.then(function(retorno) {
	// 	$scope.fotos = retorno.data;
	// }).catch(function (error) {
	// 	console.log(error);
	// });

	$http.get('/v1/fotos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});

});