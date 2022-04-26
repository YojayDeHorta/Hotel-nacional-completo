<template>
    <div>
        <v-row class="mb-2">
            <v-col>
                <v-btn color="primary"  @click="dialog=true">agregar cupon</v-btn>
            </v-col>
        </v-row>
       <v-row class="d-flex justify-center" cols="12" md="12">
        
        <v-data-table :headers="columnas"  :items="Cupones"  >
            <template v-slot:[`item.actions`]="{ item }">
                <!-- <v-icon small class="mr-2" @click="prepararEdicion(item)"> mdi-pencil </v-icon> -->
                <v-icon small @click="idDelete=item._id,dialogDelete=true"> mdi-delete </v-icon>
            </template>
            
        </v-data-table>
      </v-row>
    <!-- Agregar Modal Agregar Evento -->
    <v-dialog persistent max-width="600px" v-model="dialog">
      <v-card>
      <v-card-title>
          <span class="text-h5">añadir Cupon</span>
      </v-card-title>
      <v-card-text>
          <v-form @submit.prevent="addCupon">
          <v-row>
              <v-col md="12" cols="12">
                  <v-text-field type="text" label="nombre del cupon" v-model="cupon.nombreCupon" required></v-text-field>
              </v-col>
          </v-row>
          <v-row>
              <v-col md="6" cols="12" >
                   <v-text-field type="number" label="porcentaje de descuento" v-model="cupon.porcentaje"  required></v-text-field>   
              </v-col>
              <v-col md="6" cols="12" >
                  <v-text-field type="number" label="limite de personas por cupon" v-model="cupon.limite" required></v-text-field>
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
            <v-card-title class="d-flex justify-center mb-3" style="text-transform:uppercase;font-size:15px">¿ estas seguro de borrar este cupon ?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1 white--text" depressed @click="dialogDelete=false;idDelete=null">cancelar</v-btn>
                <v-btn color="ml-5 error darken-1" depressed @click="deleteCupon(idDelete);dialogDelete=false">Eliminar</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            Cupones:[],
            cupon:{
                nombreCupon:'',
                porcentaje:0,
                limite:0,
            },
            dialog:false,
            dialogDelete:false,
            idDelete:'',
            columnas:[
                {text:'Nombre del cupon' ,value:'nombreCupon', class:'black white--text'},
                {text:'Porcentaje' ,value:'porcentaje', class:'black white--text'},
                {text:'Cupones usados' ,value:'usos', class:'black white--text'},
                {text:'Limite del cupon' ,value:'limite', class:'black white--text'},
                { text: 'ACCIONES', value: 'actions', class:'black white--text', sortable: false },
            ],
        }
    },
    computed:{
      ...mapState(["token"]),
    },
    created() {
        this.getCupon()
    },
    methods: {
        async getCupon() {
            try {
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/config/cupones", {
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
                this.Cupones=data
            } catch (error) {
                console.log(error);
            }
        },
        async addCupon(){
            try {
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/config/cupones", {
                method: 'POST',
                headers: {"Content-Type": "application/json","auth-token": this.token },
                body: JSON.stringify(this.cupon)  
                },);
                const { data, error } = await res.json();    
                if (error) {this.$root.vtoast.show({message: error});return }
                this.getCupon()
                this.$root.vtoast.show({message: 'cupon agregado exitosamente'})
            } catch (error) {
                console.log(error);
            }
        },
        async deleteCupon(id){
            try {      
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/config/cupones", {
                method: 'DELETE',
                headers: {"Content-Type": "application/json","auth-token": this.token },
                body: JSON.stringify({id})  
                },);
                const { data, error } = await res.json();    
                if (error) {
                this.$root.vtoast.show({message: error})
                return;
                }
                this.getCupon()
                this.$root.vtoast.show({message: 'cupon eliminado exitosamente'})
            } catch (error) {
                console.log(error);
            }
        }
    },
    
}
</script>