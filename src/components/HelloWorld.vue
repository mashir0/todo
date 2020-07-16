<template>
  <v-container class="hello">
    <v-card class="mx-auto pa-5" max-width="500" outlined>
      <h1>todos</h1>

      <v-container>
        <v-row>
          <v-text-field
            label="todo"
            outlined
            placeholder="todoを入力してくだい"
            @keyup.enter="addTodo"
            v-model="title"
          />
          <v-btn class="ml-2" text outlined large @click="addTodo">追加</v-btn>
        </v-row>
      </v-container>

      <div>
        <v-list>
          <v-list-item v-for="(todo, index) in todos" :key="index">
            <td v-if="todo.edit" colspan="3">
              <v-text-field dense @keyup.enter="editTodo(todo)" type="text" v-model="todo.title" />
            </td>

            <template v-else>
              <td class="w10">
                <!-- <input type="checkbox" v-model="todo.done" /> -->
                <input type="checkbox" @change="editTodo(todo)" v-model="todo.done" />
              </td>
              <td class="w80">
                <label
                  @dblclick="todo.edit = true"
                  v-bind:class="{ done: todo.done }"
                >{{ todo.title }}</label>
              </td>
              <td class="w10">
                <v-btn icon @click="delTodo(todo)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </td>
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { db } from "@/plugins/firebase";

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

  firestore() {
    return {
      todos: db.collection("todos").orderBy("createdAt", "desc")
    };
  },

  methods: {
    addTodo() {
      if (this.title) {
        // this.todos.push({
        //   title: this.title,
        //   done: false,
        //   edit: false
        // });
        // this.title = "";
        const now = new Date();
        db.collection("todos").add({
          title: this.title,
          done: false,
          edit: false,
          createdAt: now
        });
        this.title = "";
      }
    },

    delTodo(todo) {
      // this.todos.splice(index, 1);
      db.collection("todos")
        .doc(todo.id)
        .delete();
    },

    editTodo(todo) {
      todo.edit = false;
      db.collection("todos")
        .doc(todo.id)
        .set(todo);
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
