<template>
    <div class="days" @click="ActiveDay(day.id)" >
        <div class="fullTitle">{{day.fullTitle}}</div>
        <div class="column">
        <div class="details">
            <div class="dayNum">
                {{day.id}}</div>
            <Event class="event" v-for="(event,index) in day.events"
                    :key="index"
                   :day="day"
                   :event="event"
            />

        </div>
    </div>
    </div>
</template>

<script>
    import {store} from './../Store';
    import Event from "./Event";
    export default {
        name: "Day",
        components: {Event},
        props:['day'],
        methods:{
            ActiveDay(id){
                store.DayActive(id);
            }
        }
    }
</script>

<style>
.days{
    display: flex;
    border-radius:5px;
    margin: 3px;
    background: #80ffff;

}
    .event{
        display: block;
        background: #ffcc66;
        font-size: 20px;
        margin: 3px;
        border-radius:5px;
        padding: 3px;
    }
    .fullTitle{
        text-align: center;
        background: #ffcc66;
        font-size: 25px;
        margin: 1px;
        border-radius: 5px;
    }
    .dayNum{
        padding: 3px;
        font-size: 25px;
        color: #003300;
        font-family: cursive;

    }

</style>