import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import {observable, autorun, computed} from 'mobx';
import {LoginStatus} from '@stores/index';

var todoStore = observable({
  /* some observable state */
  todos: [],

  /* a derived value */
  get completedCount() {
    return this.todos.filter((todo) => todo.completed).length;
  },
});

/* a function that observes the state */
autorun(function () {
  // console.log(
  //   'Completed %d of %d items',
  //   todoStore.completedCount,
  //   todoStore.todos.length,
  // );
});

/* ..and some actions that modify the state */
todoStore.todos[0] = {
  title: 'Take a walk',
  completed: false,
};
// -> synchronously prints 'Completed 0 of 1 items'

todoStore.todos[0].completed = true;
// -> synchronously prints 'Completed 1 of 1 items'

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
}

// @observer
export default class TodoListView extends Component {
  render() {
    // var list =
    //   this.props.todoList !== undefined ? this.props.todoList : new TodoList();
    return (
      <View style={{flex: 1, paddingHorizontal: 15}}>
        {/* <TouchableOpacity>
          <View>
            {list.todos.map((todo) => (
              <TodoView todo={todo} key={todo.id} />
            ))}
          </View>
          Tasks left: {list.unfinishedTodoCount}
        </TouchableOpacity> */}
        <Text>Name of example</Text>
        <TouchableOpacity onPress={() => {
          LoginStatus.changeStatus();
        }}
        style={{height: 30,
                backgroundColor: 'lightblue',
                width:"100%",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginTop: 15,}}>
          <Text>change status</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => {
          LoginStatus.total();
        }}
        style={{height: 30,
                backgroundColor: 'lightblue',
                width:"100%",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginTop: 15,}}>
          <Text>change status</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TodoView = observer(({todo}) => (
  <View>
    <Text>todo.finished</Text>
    {todo.title}
  </View>
));

// export default TodoListView;
