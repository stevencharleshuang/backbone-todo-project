let TodoItem = Backbone.Model.extend({
  defaults: {
    completed: false,
  },

  urlRoot: 'https://jsonplaceholder.typicode.com/todos',

  validate: function(attrs) {
    if(!attrs.title)
      return 'Title is required.';
  },

  toggle: function() {
    this.set('completed', !this.get('completed'));
  }
});
