// We always create an Ember application in the first line
Todos = Ember.Application.create();

// Then we define our models which *extend* the Ember object (so we can create instances)
Todos.Todo = Ember.Object.extend({
	title: null,
	isDone: false
});

// And finally we define a skeleton for our controller
// In this case we *create* an object as we only want one of them and it should be created immediately
Todos.Controller = Ember.Object.create({
	// We need an array to hold our Todo objects
	todos: Ember.A(),

	// We also override the default init function so we have some data to work with
	init: function() {
		// We always need to use a getter or setter for interacting with properties
		var items = this.get('todos');
		items.addObject(Todos.Todo.create({title: 'This is an Ember item'}));
		items.addObject(Todos.Todo.create({title: 'This is another Ember item'}));
	},

	remainingCount: function() {
		return this.get('todos').filterProperty('isDone', false).length;
	}.property('todos.@each.isDone')
});