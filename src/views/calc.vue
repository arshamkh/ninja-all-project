<template>
    <div class="all">
        <div class="container">
            <div class="show">{{current }}</div>
            <div class="numbers">
               <div class="line1 line">
            <div @click="append('1')" class="number1">1</div>
            <div @click="append('2')" class="number1">2</div>
            <div @click="append('3')" class="number1">3</div>
            <div @click="sum" class="number1 sum">+</div>  
                </div>
            <div class="lin2 line">
            <div @click="append('4')" class="number1">4</div>
            <div @click="append('5')" class="number1">5</div>
            <div @click="append('6')" class="number1">6</div>
            <div @click="munes" class="number1 munes">-</div>
            </div>
            <div class="line3 line">
            <div @click="append('7')" class="number1">7</div>
            <div @click="append('8')" class="number1">8</div>
            <div @click="append('9')" class="number1">9</div>
            <div @click="multi" class="number1 multi">*</div>
            </div>
            <div class="line line4">
                <div @click="append('0')" class="number1 no2">0</div>
                <div class="number1">.</div>
                <div @click="dev" class="number1 dev">/</div>
            </div>
<div class="down">
            <div  @click="eq" class="number1 eq">=</div>
            <div  @click="clear" class="number1 C">C</div>
</div>

            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            pre:null,
            current:'',
            operator:null,
            opclick:false,
        }
    },
    methods:{
        append(number1){
            if(this.opclick){
                this.current = '',
                this.opclick = false
            }
            this.current=`${this.current}${number1}`
         
        },
        sum(){
            this.operator = (a,b) => a+b;
            this.pre = this.current
            this.opclick = true
            
        },
        munes(){
            this.operator = (a,b) => b-a;
            this.pre = this.current
            this.opclick = true

        },
        dev(){
            this.operator = (a,b) => b/a;
            this.pre = this.current
            this.opclick = true
        },
        multi(){
            this.operator = (a,b) => a*b;
            this.pre = this.current
            this.opclick = true
        },
        clear(){
            this.current = ""
        },
        eq(){
            this.current = `${this.operator(parseFloat(this.current),parseFloat(this.pre))}`;
            this.pre = null
        }

    }
    
}
</script>
<style scoped>
.all{
    width: 100%;
    height: 100vh;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.show{
    width: 30%;
    height: 25%;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}
.numbers{
    width: 70%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.line{
    width: 80%;
    height: 18.75%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.number1{
    width: 10%;
    height: 100%;
    background-color: white;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.number1:hover{
    cursor: pointer;
    box-shadow: -4px -4px 4px black;
}
.no2{
    width: 20%;
}
.down{
    width: 32%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.eq{
    width:85%;
    height: 100%;
}
.C{
    width: 25%;

}
</style>