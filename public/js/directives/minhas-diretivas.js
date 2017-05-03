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

	ddo.template =
			'<div class="panel col-md-2">'
		+	'	<div class="panel-heading">'
		+	'		<h3 class="panel-title text-center">{{titulo}}</h3>'
		+	'	</div>'
		+	'	<div class="panel-body" ng-transclude>'
		+	'	</div>'
		+	'</div>'

	return ddo;
});
