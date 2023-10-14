<template>
  <div class="hello">
    <input type="text" @keyup.enter="addskill" placeholder="write your plan" v-model="skill">
    <div class="this">
      <div class="a">
            <ul>
    <li v-for="(data,index) in skills" :key='index'>{{ data.skill }}</li>
    </ul>
      </div>
    <div class="b">
      <button @click="line(index)" v-for="(data,index) in skills" :key="index">X</button>
    </div>
    </div>
    <button @click="addskill">DONE</button>

  </div>
</template>

<script>
export default {
  name: 'skill',
  data(){
    return{
      skill:'',
      skills:[
        {"skill":"computer"},
      ]

    }
  },
  methods:{
    addskill(){
      this.skills.push({skill: this.skill})
      this.skill = '';
      

    },
    line(id){
      this.skills.splice(id,1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: gray;
}
.hello{
  width: 100%;
  height: 100vh;
  padding-top: 40px;
}
li{
  color: black;
  font-size: 30px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 20px 0;
}
input{
  background-color: wheat;
  height: 35px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
}
input:hover{
  cursor: pointer;
}
input:focus{
  box-shadow: 3px 5px 5px black;
}
button{
  background-color: gray;
  border-radius: 5px;
  padding: 6px;
  font-size: 17px;
  font-weight: bold;
  color: wheat;
  border-color: wheat;
}
.this{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.a{
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.b{
  width: 20%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}
.b button{
  width: auto;
  height: auto;
  background-color: red;
  border: none;
}
.b button:hover{
  box-shadow: 2px 2px 1px white;
  cursor: pointer;
  padding-top: 5px;
  padding-right: 5px;
}

</style>
