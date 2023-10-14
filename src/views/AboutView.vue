<template>
  <div class="about">
    <div class="left">
      <div v-for="(data,index) in subnotes" :key="index" class="cart">
        <div class="shownote" @click="showme">{{data.subnote}}</div>
        <div class="del" @click="del(index)">
          <h2>Delete</h2>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="subject">
        <input type="text" class="sub" v-model="subnote">
      </div>
      <div class="mainless">
        <input type="text" class="main" v-model="note">
      </div>
        <div class="buttons">
        <button @click="subsaved">save</button>
        <button>delete</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      subnote:"",
      subnotes:[
        {"subnote":"subnote"}
      ],
      note:"",
      notes:[
        {"note" : "notes"}
      ]
    }
  },
  methods:{
    saved(){
      this.notes.push({note:this.note})
    },
    subsaved(){
      this.subnotes.push({subnote:this.subnote})
    },
    del(id){
      this.subnotes.splice(id,1)
    },
    showme(){
    
    }
  }
  
}
</script>

<style scoped>
.about{
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
.left{
  width: 15%;
  min-height: 100vh;
  background-color: gray;
  border-right: 2px solid black;
  padding-right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.right{
  width: 85%;
  height: 100vh;
  background-color: gray;
}
.subject{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainless{
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main{
  width: 90%;
  height: 90%;
  border-radius: 8px;
}
.sub{
  width: 30%;
  height: 30%;
  border-radius: 8px;
}
.buttons{
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
button{
  width: 100px;
  height: 70%;
  border-radius: 8px;
  border: 1px solid wheat;
  background-color: rgb(233, 230, 224);
}
button:hover{
  box-shadow: 4px 4px 4px black;
  cursor: pointer;
}
.cart{
  width: 98%;
  height: 100px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: rgb(233, 230, 224);
}
.shownote{
  width: 60%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 25px;
  font-weight: bold;
}
.del{
  width: 38%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

}
h2{
    font-size: 20px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h2:hover{
  cursor: pointer;
  text-shadow: 1px 1px 1px black;
}
input{
  background-color: rgb(233, 230, 224);
}
</style>
