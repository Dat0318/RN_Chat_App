import {observable, decorate, computed, action} from 'mobx';

class Todo {
  id = Math.random();
  title = '';
  finished = false;
}
decorate(Todo, {
  title: observable,
  finished: observable,
});

export class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
}

export class LoginStatus {
  @observable price = 10;
  @observable amount = 1;
  @observable status = false;

  constructor(price) {
    this.price = price;
  }

  @action changeStatus(val) {
    if (val) {
      this.status = val;
    } else {
      this.status = !this.status;
    }
  }

  @computed get total() {
    var result = this.price * this.amount;
    return result;
  }
}

export default new LoginStatus();
