<template>
  <div class="hello">
    <h1>todo</h1>

    <input
      type="text"
      placeholder="todoを入力してくだい"
      v-model="title"
    />
    <p>{{ todos }} </p>
    <button
      @click="addTodo"
    >追加</button>


    <div>
      <ul v-for="(todo, index) in todos" :key="index">
        <li>
          <input type="checkbox" >
          <label>{{todo}}</label>
          <button>削除</button>
        </li>
      </ul>
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
    }
  },

  methods:{
    addTodo() { 
      this.todos.push( this.title )
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
