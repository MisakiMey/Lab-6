<template>
    <div class="day-event">
        <div v-if="!event.edit">
            <span class="event">{{event.details}}</span>
            <button class="edit" @click="Edit(day.id, event.details)">Edit</button>
            <button class="delete" @click="deleteEv(day.id, event.details)">X</button>

        </div>
        <div v-if="event.edit">
            <label>
                <input :placeholder="event.details" v-model="editEvent"/>
            </label>
            <div><button class="sb" @click="update(day.id,event.details,editEvent)">OK</button></div>

        </div>

    </div>
</template>

<script>
    import {store} from './../Store';
    export default {
        name: "Event",
        props:['day','event'],
        data(){
            return{
                editEvent:'',
            }
        },
        methods:{
            Edit(id,eventD){
                store.EditEv(id,eventD);
            },

            update(id,originalD,newEvent)
            {
                if(newEvent==='') newEvent=originalD;
                store.updateEv(id,originalD,newEvent);
                this.editEvent='';
            },
            deleteEv(id,eventD){
                store.DeleteEvent(id,eventD)


            }
        }

    }
</script>

<style>

    .day-event button{
        margin-left: 5px;
    }
.event{
    display: block;
}
    .edit{
        border: none;
        background: none;

    }
    .delete{
        float: right;
        border: none;
        background: none;
        margin: 3px;
    }


</style>