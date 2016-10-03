	angular.module("contactList-app", []);
	angular.module("contactList-app").controller("contatoCtrl", function($scope, $http){
			$scope.itens = [
					{description: "Wesley Tavares"},
					{description: "Joyce"},
					{description: "Victor"},
					{description: "Trolls"},
					];

		$scope.addItem = function(item, event) {
			if(event.keyCode !== 13) return;
			
			$scope.itens.push(item);
			delete $scope.item;
			
		};

		$scope.deleteSelectItens = function	(itens) {
			$scope.itens = itens.filter(function(item) {
				return !item.done;
			});
		};

		$scope.hasSelectedItens = function (itens) {
			return itens.some(function (item) {
				return item.done;
			});
		}

	});
