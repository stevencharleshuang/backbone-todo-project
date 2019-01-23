let TodoItemsView = Backbone.View.extend({
  tagName: 'ul',

  id: 'todoItems',

  initialize: function(options) {
    if (!(options && options.model))
      throw new Error('model is not specified.');
  },

  render: function() {
    let self = this;

    this.model.each(function(todoItem) {
      let view = new TodoItemView({ model: todoItem });
      self.$el.append(view.render().$el);
    });

    return this;
  }
});