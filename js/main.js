$(document).ready(() => {
  // let todoItem = new TodoItem({ description: 'TodoItem 1' });

  // let todoItemView = new TodoItemView({ model: todoItem });
  // $('body').append(todoItemView.render().$el);
  let todoItems = new TodoItems([
    new TodoItem({ description: 'TodoItem 1' }),
    new TodoItem({ description: 'TodoItem 2' }),
  ]);
  let todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
});