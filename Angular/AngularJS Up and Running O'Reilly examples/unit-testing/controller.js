angular.module('notesApp',[])
	.controller('ListCtrl',[function(){
		
		var self = this;
		
		self.items = [
			{id:1 , label:'Fisrt',done:true},
			{id:1 , label:'Second',done:false}
		];

		self.getDoneClass = function(item){
			return {
				finished: item.done,
				unfinished: !item.done
			};
		};
	}]);