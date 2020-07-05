<template>
  <div class="hello">
    <h1>todo</h1>
    <h3>h3 todo</h3>
    <p>$data : {{ $data }}</p>
    <p>todos : {{ todos }}</p>

    <input @keyup.enter="addTodo" type="text" placeholder="todoを入力してくだい" v-model="title" />
    <button @click="addTodo">追加</button>

    <div>
      <tabel>
        <tr v-for="(todo, index) in todos" :key="index">
          <td v-if="todo.edit" colspan="3">
            <input @keyup.enter="todo.edit = false" type="text" v-model="todo.title" />
          </td>

          <template v-else>
            <td class="w10">
              <input type="checkbox" v-model="todo.done" />
            </td>
            <td class="w80">
              <label @dblclick="todo.edit = true" v-bind:class="{done: todo.done}">{{ todo.title }}</label>
            </td>
            <td class="w10">
              <button @click="delTodo(index)">削除</button>
            </td>
          </template>
        </tr>
      </tabel>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      todos: [],
      title: ""
    };
  },

  methods: {
    addTodo() {
      if (this.title) {
        this.todos.push({
          title: this.title,
          done: false,
          edit: false
        });
        this.title = "";
      }
    },

    delTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  text-decoration: line-through;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.done {
  text-decoration: line-through;
}

.w10 {
  width: 10%;
}

.w80 {
  width: 80%;
}

.w100 {
  width: 100%;
}
</style>
