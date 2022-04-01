<template>
    <div>
        <v-btn outlined rounded text  @click="dialogDelete=true" :loading="loading" v-if="habitacion.estado=='Disponible'"> Deshabilitar </v-btn>
        <v-btn outlined rounded text  @click="dialogDelete=true" :loading="loading" v-else-if="habitacion.estado=='Deshabilitado'"> Cambiar a disponible </v-btn>
            <!-- modal para confirmar -->
        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-toolbar color="black" v-if="habitacion.estado=='Disponible'" dark>Cambiar estado de habitacion</v-toolbar>
                <v-toolbar color="blue" v-else-if="habitacion.estado=='Deshabilitado'" dark>Cambiar estado de habitacion</v-toolbar>
                <v-card-title class="d-flex justify-center mb-3" style="text-transform:uppercase;font-size:15px" v-if="habitacion.estado=='Disponible'">¿ estas seguro de deshabilitar esta habitacion ?</v-card-title>
                <v-card-title class="d-flex justify-center mb-3" style="text-transform:uppercase;font-size:15px" v-else-if="habitacion.estado=='Deshabilitado'">¿ estas seguro de Habilitar esta habitacion ?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1 white--text" depressed @click="dialogDelete=false">cancelar</v-btn>
                    <v-btn color="ml-5 error darken-1" depressed @click="changeStateHabitacion();dialogDelete=false">Cambiar estado</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    name:'DeshabilitarHabitacion',
    data() {
        return {
            loading:false,
            dialogDelete:false
        }
    },
    props:{
        habitacion:null
    },
    computed:{
        ...mapState(["token"]),
    },
    methods: {
        async changeStateHabitacion(){
            try {      
                this.loading=true
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/habitaciones/state", {
                method: 'POST',
                headers: {"Content-Type": "application/json","auth-token": this.token },
                body: JSON.stringify(this.habitacion)  
                },);
                const { data, error } = await res.json();    
                if (error) {
                    this.$emit('notificacion',error)
                return;
                }
                this.$emit('notificacion','habitacion cambiada exitosamente')
                this.loading=false
            } catch (error) {
                console.log(error);
            }
    }
    },
}
</script>