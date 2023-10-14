<template>
    <div class="all">
        <div class="sub">{{current.title}} - {{current.artist}} - {{current.src}}</div>
        <div class="playlist">
            <h1>THE PLAYLIST</h1>
            <li v-for="song in songs" :key="song.src" @click="play(song)">
                {{song.title}} - {{song.artist}}
            </li>
        </div>
        <div class="buttons">
            <button @click="prev">prev</button>
            <button v-if="!isPlaying" @click="play">play</button>
            <button v-else @click="pause">pause</button>
            <button @click="next">next</button>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            current:{},
            index:0,
            isPlaying:false,
            songs:[
                {
                    title:"arshami",
                    artist:"arsham",
                    src: require('../assets/Catchy.mp3')
                },
                {
                    title:"roshui",
                    artist:"roshui",
                    src: require('../assets/takh.mp3')

                }
            ],
            player: new Audio()

        }
    },
    methods:{
        play(song){
            if(typeof song.src !="undefined"){
            this.current = song;
            this.player.src = this.current.src;
            }
            this.player.play();
            this.isPlaying = true
            

        },
        pause(){
            this.player.pause();
            this.isPlaying = false
        },
        next(){
            this.index++;
            if(this.index > this.songs.length - 1){
                this.index = 0
            }
            this.current = this.songs[this.index];
            this.play(this.current)

        },
        prev(){
            this.index--;
            if(this.index < 0){
                this.index = this.songs.length - 1
            }
            this.current = this.songs[this.index];
            this.play(this.current)
        },
    },
    created(){
        this.current = this.songs[this.index];
        this.player.src = this.current.src;
    }
    
}
</script>
<style scoped>
.all{
    width: 100%;
    height: 100vh;
    background-color: gray;
}
.sub{
    width: 100%;
    height: 200px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
}
li{
    color: black;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-bottom: 20px;
    font-style: italic;
}
.playlist{
    width: 100%;
    min-height: 300px;
    background-color: gray;
}
.playlist h1{
    font-size: 60px;
    font-weight: bold;
    color: black;
    padding-bottom: 30px;
    
}
.buttons{
    width: 100%;
    height: 100px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}
.buttons button{
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    background-color: black;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border: none;
}
button:hover{
    padding-top: 2px;
    cursor: pointer;
    box-shadow: 2px 2px 2px black;
    opacity: 0.8;
}
</style>