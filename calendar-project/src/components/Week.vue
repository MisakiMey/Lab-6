<template>
    <div class="WeekBox">
    <div class='app'>



        <Day class="Day" v-for="day in DataDay.data"
            :key="day.id"
             :day="day"
        />

    </div>
    </div>
</template>

<script>
    import {store} from './../Store';
    import Day from "./Day";
    export default {
        name: "Week",
        components: {Day},
        data()
        {
            return{
                DataDay:store.state
            }
        },


    }
</script>

<style scoped>
    .app{
        display: flex;
    }
.Day{
    display: block;
}
    .WeekBox{
        display: inline-block;


    }
</style>