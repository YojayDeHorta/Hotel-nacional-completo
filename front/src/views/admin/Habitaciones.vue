<template>
  <v-container >
    <v-row>
      <v-col cols="4">
        <v-btn color="primary" elevation="2" @click="dialog=true">agregar habitacion</v-btn>
      </v-col>
      <v-col cols="4">
        <v-select :items="filtroEstadoOpciones" label="Filtrar por estado" v-model="filtroEstado" dense outlined></v-select>
      </v-col>
      <v-col cols="4">
        <v-select :items="filtroTipoOpciones" label="Filtrar por tipo" v-model="filtroTipo" dense outlined></v-select>
      </v-col>
    </v-row>
    
    
    
    
    <v-row mt="5">
      <v-col cols="12" sm="6" md="4" v-for="habitacion in getHabitacionesFiltro" :key="habitacion._id">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{habitacion.tipo_habitacion}} {{habitacion.personas}} pax</div>
              <v-list-item-title class="text-h5 mb-1">
                {{habitacion.name}}
              </v-list-item-title>
              <v-list-item-subtitle >
                {{habitacion.estado}} - {{habitacion.precio}}€
              </v-list-item-subtitle>
              <v-list-item-subtitle >
               {{habitacion.servicio}}
              </v-list-item-subtitle>
            </v-list-item-content>

            <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
          </v-list-item>

          <v-card-actions>
            <DeshabilitarBoton v-if="habitacion.estado!='Ocupado'" :habitacion="habitacion" @notificacion="getHabitaciones()"/>
            <v-btn outlined rounded text color="error" @click="idDelete=habitacion._id;dialogDelete=true"> eliminar </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>


    <!-- Agregar Modal Agregar Evento -->
    <v-dialog persistent max-width="600px" v-model="dialog">
      <v-card>
      <v-card-title>
          <span class="text-h5">añadir habitacion</span>
      </v-card-title>
      <v-card-text>
          <v-form @submit.prevent="addHabitacion">
          <v-row>
              <v-col md="12" cols="12">
                  <v-text-field type="text" label="nombre de la habitacion" v-model="room.name" required></v-text-field>
              </v-col>
          </v-row>
          <v-row>
              <v-col md="6" cols="12">
                  <!-- <v-text-field type="text" label="Nombre de la habitacion" v-model="room.name"  required></v-text-field>   -->
                  <v-select :items="tipos_habitaciones" label="tipo de habitacion" v-model="room.tipo_habitacion" ></v-select>
              </v-col>
              <v-col md="6" cols="12">
                  <v-select :items="servicio_habitaciones" label="servicio" v-model="room.servicio" ></v-select>
              </v-col>
          </v-row>
          <v-row>
              <v-col md="6" cols="12" >
                   <v-text-field type="text" label="Nombre de la habitacion" v-model="otro_habitacion" v-if="room.tipo_habitacion=='otro'"  required></v-text-field>   
              </v-col>
              <v-col md="6" cols="12" >
                  <v-text-field type="text" label="Servicio" v-model="otro_servicio" v-if="room.servicio=='otro'" required></v-text-field>
              </v-col>
          </v-row>
          <v-row>
              <v-col md="4">
                  <v-text-field type="number" label="Precio" v-model="room.precio"  required></v-text-field>
              </v-col>
              <v-col md="4">
                  <v-text-field type="number" label="Personas" v-model="room.personas"  required></v-text-field>
              </v-col>
          </v-row>
              <v-spacer></v-spacer>
              <v-card-actions>
                  <v-btn type="submit" color="primary" class="mr-2" @click.stop="dialog=false">Agregar</v-btn>
                  <v-btn  color="error" class="mr-4" @click.stop="dialog=false">Cancelar</v-btn>
              </v-card-actions>
          </v-form>
      </v-card-text>
      </v-card>
            
    </v-dialog>
    <!-- modal para borrar -->
    <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
            <v-toolbar color="red" dark>ELIMINAR REGISTRO</v-toolbar>
            <v-card-title class="d-flex justify-center mb-3" style="text-transform:uppercase;font-size:15px">¿ estas seguro de borrar esta habitacion ?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1 white--text" depressed @click="dialogDelete=false;idDelete=null">cancelar</v-btn>
                <v-btn color="ml-5 error darken-1" depressed @click="deleteHabitacion(idDelete);dialogDelete=false">Eliminar</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import Calendario from "./Calendario.vue";
import DeshabilitarBoton from '../../components/administrador/DeshabilitarHabitacion.vue';
export default {
  components: {
    Calendario,
    DeshabilitarBoton
  },
  data() {
    return {
      habitaciones: null,
      dialog:false,
      room:{
        name:'',
        tipo_habitacion:'',
        servicio:'',
        precio:0,
        personas:0,
        ocupado:false
      },
      otro_habitacion:'',
      otro_servicio:'',
      tipos_habitaciones: ['Individual', 'Doble', 'Familiar', 'otro'],
      servicio_habitaciones: ['alojamiento + desayuno', 'alojamiento + media pension', 'otro'],
      filtroTipoOpciones: ['Ninguno', 'Individual', 'Doble', 'Familiar'],
      filtroTipo:'Ninguno',
      filtroEstadoOpciones: ['Ninguno', 'Ocupados', 'Disponibles', 'Deshabilitados'],
      filtroEstado:'Ninguno',
      idDelete:'',
      dialogDelete:false
    
      
    };
  },
  created() {

    this.getHabitaciones();
    if(this.$route.query.filtro)this.filtroTipo=this.$route.query.filtro
  },
  mounted() {
    
  },
  computed: {
    ...mapState(["token"]),
    getHabitacionesFiltro(){
        if (!this.habitaciones) return
        let habiFiltro=this.habitaciones
        if(this.filtroEstado=='Ocupados')habiFiltro=habiFiltro.filter(habitacion => habitacion.estado == 'Ocupado')
        if(this.filtroEstado=='Disponibles')habiFiltro=habiFiltro.filter(habitacion => habitacion.estado == 'Disponible')
        if(this.filtroEstado=='Deshabilitados')habiFiltro=habiFiltro.filter(habitacion => habitacion.estado == 'Deshabilitado')
        
        if(this.filtroTipo=='Individual')habiFiltro=habiFiltro.filter(habitacion => habitacion.tipo_habitacion == 'Individual')
        if(this.filtroTipo=='Doble')habiFiltro=habiFiltro.filter(habitacion => habitacion.tipo_habitacion == 'Doble')
        if(this.filtroTipo=='Familiar')habiFiltro=habiFiltro.filter(habitacion => habitacion.tipo_habitacion == 'Familiar')
        // if(this.filtroTipo)
        return habiFiltro
    }
  },
  methods: {
    
    async getHabitaciones() {
      try {
        
        const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/habitaciones", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": this.token,
          },
        });
        const { data, error } = await res.json();
        if (error) {
          this.$root.vtoast.show({message: error})
          return;
        }
        console.log(data);
        this.habitaciones = data;
        // console.log(this.habitaciones);
      } catch (error) {
        console.log(error);
      }
    },
    async addHabitacion(){
      try {
        if (this.room.tipo_habitacion=='otro') this.room.tipo_habitacion=this.otro_habitacion
        if (this.room.servicio=='otro') this.room.servicio=this.otro_servicio
        console.log(this.room);
        const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/habitaciones", {
        method: 'POST',
        headers: {"Content-Type": "application/json","auth-token": this.token },
        body: JSON.stringify(this.room)  
        },);
        const { data, error } = await res.json();    
        if (error) {
          this.$root.vtoast.show({message: error})
          return;
        }
        this.getHabitaciones()
        this.$root.vtoast.show({message: 'habitacion agretada exitosamente'})
      } catch (error) {
        console.log(error);
      }
    },
    async deleteHabitacion(id){
      try {      
        console.log(id);
        const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/habitaciones", {
        method: 'DELETE',
        headers: {"Content-Type": "application/json","auth-token": this.token },
        body: JSON.stringify({id})  
        },);
        const { data, error } = await res.json();    
        if (error) {
          this.$root.vtoast.show({message: error})
          return;
        }
        this.getHabitaciones()
        this.$root.vtoast.show({message: 'habitacion eliminada exitosamente'})
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>
<style >
.about {
  background-color: #eeeeee;
}
</style>