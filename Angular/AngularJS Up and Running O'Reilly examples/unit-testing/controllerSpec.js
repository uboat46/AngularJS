describe('Controller: ListCtrl',function(){
	//Instantiate a new version of module before each test
	beforeEach(module('notesApp'));

	var ctrl;

	//before each test instantiate a new controller
	beforeEach(inject(function($controller){
		ctrl = $controller('ListCtrl');
	}));

	it('should have item available on load', function() {
		expect(ctrl.items).toEqual([
			{id:1 , label:'Fisrt',done:true},
			{id:1 , label:'Second',done:false}
		]);
	});

	it('should have highlight items based on state', function() {
		var item = {id:1 , label:'Fisrt',done:true};

		var actualClass = ctrl.getDoneClass(item);
		expect(actualClass.finished).toBeTruthy();
		expect(actualClass.unfinished).toBeFalsy();
		
		item.done = false;
		var actualClass = ctrl.getDoneClass(item);
		expect(actualClass.finished).toBeFalsy();
		expect(actualClass.unfinished).toBeTruthy();
	});
});