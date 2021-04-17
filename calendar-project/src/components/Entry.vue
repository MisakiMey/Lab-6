<template>
    <div class="Entry">
        <span class="name">Events</span>
        <div class="thisDay">Day Event: {{ActiveDay}}</div>
        <div>
            <label>
                <input class="inputer" placeholder="Write new Event" v-model="newEv"/>
            </label>

        </div>
        <div>
            <button class="subm" @click="SubmitEvent(newEv)">Send</button>
        </div>

    </div>
</template>

<script>
    import {store} from './../Store';
    export default {
        name: "Entry",
        data(){
            return{
                newEv:'',
                error:'',

            }
        },
        computed:{
            ActiveDay(){
                return store.getActiveDay().fullTitle;
            }
        },
        methods:{
            SubmitEvent(newEvent){
                if(newEvent==='') return this.error = true;

                store.SubmitEvent(newEvent);
                this.newEv='';
                this.error=false;
            }
        }
    }
</script>

<style >
.Entry{
    float: right;
    margin: 10px;
    padding: 10px;
    background: #80ffff;
    border-radius:5px;


}
    .name{
        display: block;
        text-align: center;
        font-size: 25px;
        padding: 5px;
    }
    .thisDay{
        display: block;
        font-size: 20px;
    }
    .inputer{
        display: block;
        font-size: 20px;
        padding: 3px;
        margin: 10px;

    }
    .subm{
        display: block;
        margin: auto;
        font-size: 20px;
        color: #e6004c;
        background: none;
        border: none;
    }
</style>