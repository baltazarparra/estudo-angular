angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
	var ddo = {};
	// directive definition object (DDO):

	ddo.restric = "AE";
	// Uma diretiva em Angular pode ser usada como Elemento, Atributo ou Comentário (esta última muito incomum).

	ddo.scope = {
		titulo: '@'
	};
	// escopo isolado, o adicionando em nosso DDO a propriedade scope

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
});
