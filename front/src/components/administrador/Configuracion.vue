<template>
  <v-card-text>
    <v-form @submit.prevent="addHabitacion">
      <v-row>
        <v-col md="2" cols="2">
          <p class="text-left">
          añadir hora
          </p>
        </v-col>
        <v-col md="5" cols="10">
          <!-- <v-text-field type="text" label="Nombre de la habitacion" v-model="room.name"  required></v-text-field>   -->
          <date-picker   v-model="date " type="date" range :disabled-date="disabledRange"></date-picker>
        </v-col>
        <v-col md="2" cols="12">
            <v-btn depressed @click="addFecha()">Guardar</v-btn>
        </v-col>
        <v-col md="3" cols="12">
          <v-switch
            v-model="switchDesactivar"
            flat
            :label="`Desactivar servicios`"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center" cols="12" md="12">
        
        <v-data-table :headers="columnas" :items="fechasISO" sort-by="ID" >
            <template v-slot:[`item.actions`]="{ item }">
                <!-- <v-icon small class="mr-2" @click="prepararEdicion(item)"> mdi-pencil </v-icon> -->
                <v-icon small @click="deleteFecha(item._id)"> mdi-delete </v-icon>
            </template>
            
        </v-data-table>
      </v-row>
      <v-spacer></v-spacer>
    </v-form>
    <v-snackbar v-model="snackbar.open">
            {{ snackbar.text }}
            <v-btn color="error" class="ml-5" @click="snackbar.open = false">cerrar</v-btn>
    </v-snackbar>
  </v-card-text>
</template>
<script>
import DatePicker from "vue2-datepicker";
import 'vue2-datepicker/index.css';
import { mapState } from "vuex";


export default {
  components: {
    DatePicker,
  },
  name: "Navbar",
  data() {
    return {
      switchDesactivar: false,
      columnas:[
                {text:'DESDE' ,value:'from', class:'black white--text'},
                {text:'HASTA' ,value:'to', class:'black white--text'},
                { text: 'ACCIONES', value: 'actions', class:'black white--text', sortable: false },
        ] ,
        fechasISO:[],
        fechas:[],
        disabledDates:{
            to: new Date(Date.now())
        },
        date:[],
        snackbar:{
          open:false,
          text:''
        },
    };
  },
  computed:{
      ...mapState(["token"]),
  },
  created() {
      this.getFecha()
      
  }
  ,
   methods: {
     notificacion(mensaje){
        this.snackbar.open=true
        this.snackbar.text=mensaje
    },
    disabledRange: function (date) {
      let flag=false
      if (date < new Date(new Date().setHours(0, 0, 0, 0))) return true
      
      this.fechas.forEach(element => {
        var minDate = new Date(element.from).setHours(0, 0, 0, 0);
        var maxDate =  new Date(element.to).setHours(0, 0, 0, 0);
        if (date >= minDate && date <= maxDate ){
          flag=true
        }
      });
      return flag
    },
    async addFecha(){
      try {
          console.log(this.date);
        const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/config/fechanothabitable", {
        method: 'POST',
        headers: {"Content-Type": "application/json","auth-token": this.token },
        body: JSON.stringify({from:this.date[0],to:this.date[1]})  
        },);
        const { data, error } = await res.json();    
        if (error) {
          this.notificacion(error)
          return;
        }
        this.date=[]
        this.getFecha()
        this.notificacion('Fecha agretada exitosamente')
        

      } catch (error) {
        console.log(error);
      }
    },
    async getFecha() {
      try {
        const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/config/fechanothabitable", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": this.token,
          },
        });
        const { data, error } = await res.json();
        if (error) {
          console.log(error);
          return;
        }
        this.fechas=JSON.parse(JSON.stringify(data))
        this.fechasISO =data.map((fecha) => {
            fecha.from=new Date(fecha.from).toISOString().substring(0, 10)
            fecha.to=new Date(fecha.to).toISOString().substring(0, 10)
            return fecha
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteFecha(id){
      try {      
        console.log(id);
        const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/config/fechanothabitable", {
        method: 'DELETE',
        headers: {"Content-Type": "application/json","auth-token": this.token },
        body: JSON.stringify({id})  
        },);
        const { data, error } = await res.json();    
        if (error) {
          this.notificacion(error)
          return;
        }
        this.getFecha()
        this.notificacion('Fecha eliminada exitosamente')
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>