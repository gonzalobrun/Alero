angular.module('starter.controllers')

.controller('ProjectController', ['$scope', '$state', function($scope, $state) {

	$scope.myvar = "Gonzalo";

	$scope.log = function(){
		console.log("heyeheye");
	};

	$scope.goToCreateProject = function() {
		$state.go('createProject');
	};

	$scope.goToDetails = function(index){
		console.log($scope.projects[index]._id);
	}

	console.warn('ProjectController');

	$scope.projects = [{
	    "_id" : 1,
	    "clienteId" : 1,
	    "creadorId" : 2,
	    "direccionProyecto" : {
	        "altura" : 1256,
	        "barrio" : "Alberdi",
	        "calle" : "Santa Rosa",
	        "ciudad" : "Córdoba",
	        "codigoPostal" : 5000,
	        "coordenadas" : "-31.407613, -64.199467"
	    },
	    "duracion" : 96,
	    "estado":"approved",
	    "fechaCreacion" : "2017-03-18T16:00:00Z",
	    "fechaFin" : "2017-07-10T16:00:00Z",
	    "fechaInicio" : "2017-03-26T16:00:00Z",
	    "fechaModificacion" : "2017-03-18T16:00:00Z",
	    "groupoId" : 1,
	    "montosPagados" : [],
	    "nombre" : "Remodelacion Depto",
	    "pagosEstablecidos" : 3,
	    "pagosRealizados" : 1,
	    "precio" : 4500,
	    "superficieCubierta" : 60,
	    "superficieTerreno" : 60,
	    "treas" : [ 
	        {
	            "nombreTarea" : "Cambiar Pisos",
	            "pesoTarea" : 5
	        }, 
	        {
	            "nombreTarea" : "Cambiar Cañerias",
	            "pesoTarea" : 5
	        }, 
	        {
	            "nombreTarea" : "Cambiar Bajomesada",
	            "pesoTarea" : 3
	        }, 
	        {
	            "nombreTarea" : "Cambiar Sanitarios",
	            "pesoTarea" : 4
	        }
	    ],
	    "gastos" : [],
	    "tipoPago" : "Cuotas",
	    "tipoProyecto" : "Remodelacion"
	},{
	    "_id" : 2,
	    "clienteId" : 2,
	    "creadorId" : 3,
	    "direccionProyecto" : {
	        "altura" : 1240,
	        "barrio" : "General Paz",
	        "calle" : "Lima",
	        "ciudad" : "Córdoba",
	        "codigoPostal" : 5000,
	        "coordenadas" : "-31.412945, -64.167037"
	    },
	    "duracion" : 110,
	    "estado":"draft",
	    "fechaCreacion" : "2017-04-12T16:00:00Z",
	    "fechaFin" : "2017-08-02T16:00:00Z",
	    "fechaInicio" : "2017-04-15T16:00:00Z",
	    "fechaModificacion" : "2017-04-12T16:00:00Z",
	    "groupoId" : 1,
	    "montosPagados" : [ 
	        12000, 
	        7000
	    ],
	    "nombre" : "Ampliacion Garage",
	    "pagosEstablecidos" : 3,
	    "pagosRealizados" : 2,
	    "precio" : 24000,
	    "superficieCubierta" : 97,
	    "superficieTerreno" : 120,
	    "treas" : [ 
	        {
	            "nombreTarea" : "Levantar Pisos",
	            "pesoTarea" : 2
	        }, 
	        {
	            "nombreTarea" : "Loza",
	            "pesoTarea" : 5
	        }, 
	        {
	            "nombreTarea" : "Derribar Muro",
	            "pesoTarea" : 3
	        }, 
	        {
	            "nombreTarea" : "Colocacion de Pisos",
	            "pesoTarea" : 4
	        }, 
	        {
	            "nombreTarea" : "Instalacion del Porton",
	            "pesoTarea" : 4
	        }, 
	        {
	            "nombreTarea" : "Conexiones electricas",
	            "pesoTarea" : 2
	        }
	    ],
	    "gastos" : [],
	    "tipoPago" : "Cuotas",
	    "tipoProyecto" : "Remodelacion"
	},{
	    "_id" : 3,
	    "clienteId" : 3,
	    "creadorId" : 1,
	    "direccionProyecto" : {
	        "altura" : 142,
	        "barrio" : "Centro",
	        "calle" : "27 de Abril",
	        "ciudad" : "Córdoba",
	        "codigoPostal" : 5000,
	        "coordenadas" : "-31.416422, -64.186387"
	    },
	    "duracion" : 54,
	    "estado":"completed",
	    "fechaCreacion" : "2017-03-18T16:00:00Z",
	    "fechaFin" : "2017-07-10T16:00:00Z",
	    "fechaInicio" : "2017-03-26T16:00:00Z",
	    "fechaModificacion" : "2017-03-18T16:00:00Z",
	    "groupoId" : 1,
	    "montosPagados" : [ 
	        3000
	    ],
	    "nombre" : "Veterinaria - Local Comercial",
	    "pagosEstablecidos" : 3,
	    "pagosRealizados" : 1,
	    "precio" : 9000,
	    "superficieCubierta" : 45,
	    "superficieTerreno" : 45,
	    "treas" : [ 
	        {
	            "nombreTarea" : "Derribamiento Paredes Durlok",
	            "pesoTarea" : 3
	        }, 
	        {
	            "nombreTarea" : "Colocacion Nuevos Paneles de Durlok",
	            "pesoTarea" : 4
	        }, 
	        {
	            "nombreTarea" : "Amoblamiento Cocina",
	            "pesoTarea" : 4
	        }, 
	        {
	            "nombreTarea" : "Amoblamiento Quirofano",
	            "pesoTarea" : 4
	        }, 
	        {
	            "nombreTarea" : "Amoblamiento Local Comercial",
	            "pesoTarea" : 3
	        }, 
	        {
	            "nombreTarea" : "Ploteo",
	            "pesoTarea" : 2
	        }
	    ],
	    "gastos" : [],
	    "tipoPago" : "Cuotas",
	    "tipoProyecto" : "Diseño y Remodelacion"
	}]

}]);
