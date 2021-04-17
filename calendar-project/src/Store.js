import {datas} from './data';
import { reactive } from 'vue';


export const store={
    state: {
        data: reactive(datas)
    },
    getActiveDay(){
        return this.state.data.find(day=>day.active);

    },
    DayActive(id){
        this.state.data.map(day=>{
            day.id===id? day.active=true : day.active=false;

        })

    },
    getEvent(id,eventD){
        let Day=this.state.data.find(day=>day.id===id);
        return Day.events.find(ev=>ev.details===eventD);

    },
    EditEv(id,eventD){
        this.resetActive();
        let ev=this.getEvent(id,eventD);
        ev.edit=true;

    },
    updateEv(id, eventD, newEvent){

        let day=this.getEvent(id,eventD);
        day.details=newEvent;
        day.edit=false;
    },
    DeleteEvent(id,eventD){
        let Day=this.state.data.find(day=>day.id===id);
        let Event=Day.events.findIndex(ev=>ev.details===eventD);
        Day.events.splice(Event,1);
    },
    SubmitEvent(newEvent){
        let act=this.getActiveDay();
        act.events.push({details:newEvent,edit:false});
    },



    resetActive(){
        this.state.data.map(day=>{
            day.events.map(ev=>{
                ev.edit=false;
            })

        })
    }


};