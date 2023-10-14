<template>
    <div class="all">
                <div class="search-bar">
            <input type="text" v-model="search" placeholder="for search just type,for add click button">
            <button @click="clicked">press</button>
        </div>
     <div class="container" v-for="post in findd" :key='post.id'>
         <post :post="post"></post>
         </div>    
    </div>
</template>
<script>
import post from '../components/post.vue'
export default {
    name:'find',
    components:{ post },
    data(){
        return{
            search:'',
            skills:[
                {
                id:1,
                body:"somethihng wrong"
                },
                {
                id:2,
                body:"somethihng number2"
                },
            ]
        }
    },
    methods:{
        clicked(){
            this.skills.push({body:this.search});
            this.search = ""
        }

    },
    computed:{
                    findd(){
                      return  this.skills.filter(post=>post.body.includes(this.search)) 
                    }
    }
    
}
</script>


<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.all{
    width: 100%;
    height: 100vh;
    background-color: rgb(156, 119, 119);
}
.search-bar{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.2px solid blue;

}
.btn{
    margin-left: 5px;
    padding: 5px;
    border-radius: 7px;
    border: none;
}
.container{
    width: 100%;
    height: auto;
    margin-top:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(32, 32, 189);
    color: white;

}
button{
    width: auto;
    height: auto;
    padding: 5px;
    border: none;
    background-color: rgb(32, 32, 189);
    border-radius: 6px;
    font-size: 20px;
    margin-left: 10px;

}
button:hover{
    box-shadow: 3px 3px 3px black;
    cursor: pointer;
    padding-top: 6px;
}
input{
    width: 250px;
    height: 45px;
    border-radius: 10px;
    border: none;
    padding: 5px;
}
</style>