$(document).ready(() => {
  let todoItems = new TodoItems([
    new TodoItem({ id: 1, description: 'TodoItem 1' }),
    new TodoItem({ id: 2, description: 'TodoItem 2' }),
  ]);
  let todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
});