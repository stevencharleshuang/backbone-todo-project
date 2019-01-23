$(document).ready(() => {
  let todoItems = new TodoItems();
  todoItems.fetch({});


  let todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
});