<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">

          <!-- Botón Agregar Evento -->
            <!-- <v-btn color="primary" dark class="mr-4" @click="dialog = true">agregar</v-btn> -->
          <v-btn outlined class="mr-4" @click="setToday">
            Hoy
          </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>Habitaciones - {{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn class="ml-2" outlined @click="dialogConfig=true" fab small ><v-icon >mdi-cog</v-icon></v-btn>
              <v-btn
                outlined
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Dia</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semana</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mes</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 Dias</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="isEvents"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEventRedirect"
          @click:more="viewDay"
          @click:date="viewDay"
           @change="updateRange"
        :weekdays="[1, 2, 3, 4, 5, 6, 0]"
        locale="es"
        :short-weekdays="false"
        >
        <!--@click:event="showEvent" this.$router.push('/url-path')
          @click:more="viewDay"
          @click:date="viewDay"
           @change="updateRange" -->
          <template v-slot:event="{ event }" @click="this.$router.push('/habitaciones?filtro=')">
            {{event.name}}
          </template>
          <template #day-label="{ day,date  }">
            <v-btn
              fab
              small
              :disabled="disabledRange(date)"
              @click="viewDay"
            >
              <span v-text="day" />
            </v-btn>
          </template>
        </v-calendar>

        <!-- Agregar Modal Agregar Evento -->
        <v-dialog persistent max-width="600px" v-model="dialog">
            <v-card>
                <v-container>
                    <v-card>
                    <v-card-title>
                        <span class="text-h5">Crear tarea</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="addEvent">
                        <v-row>
                            <v-col md="6">
                                <v-text-field type="text" label="Agregar Nombre" v-model="name"  required></v-text-field>  
                            </v-col>
                            <v-col md="6">
                                <v-text-field type="text" label="Agregar un detalle" v-model="details"  required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="4">
                                <v-text-field type="date" label="Inicio del evento" v-model="start"  required></v-text-field>
                            </v-col>
                            <v-col md="4">
                                <v-text-field type="date" label="fin del evento" v-model="end" required></v-text-field>
                            </v-col>
                            <v-col md="4">
                                <h5>color de la tarea:</h5>
                                <v-input-colorpicker class="ml-5" type="color" label="color del evento" v-model="color" value="color"></v-input-colorpicker>
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
                </v-container>
                
            </v-card>
        </v-dialog>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <!-- Agregar Funcionalidades Editar y Eliminar -->
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon  @click="deleteEvent(selectedEvent)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon v-if="currentlyEditing!== selectedEvent.id" @click.prevent="editEvent(selectedEvent.id)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              
            </v-toolbar>

            <v-card-text>
              <v-form v-if="currentlyEditing!== selectedEvent.id">
                  {{selectedEvent.details}}
              </v-form>
              <v-form v-else>
                  <v-text-field type="text" v-model="selectedEvent.name" label="editar nombre"></v-text-field>
                  <textarea-autosize v-model="selectedEvent.details" type="text" style="width:100%" :min-heigth="100"></textarea-autosize>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="error"
                @click="selectedOpen = false;esperarFuncion()"
              >
                Cancelar
              </v-btn>
              <v-btn text v-if="currentlyEditing === selectedEvent.id" @click.prevent="updateEvent(selectedEvent)"> Guardar cambios</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
    <!-- Configuracion-->
    <v-dialog persistent max-width="800px" v-model="dialogConfig">
      <v-card>
      <v-card-title>
          <span class="text-h5">Editar configuracion</span>
      </v-card-title>
      <Configuracion/>
      <v-card-actions>
        <v-btn  color="error" class="mr-4" @click.stop="dialogConfig=false;getFechasDesactivadas()">Cancelar</v-btn>
      </v-card-actions>
      </v-card>
            
    </v-dialog>
  </v-row>
  
</template>

<script>
    // import {db} from '../main'
import { mapState } from "vuex";
import Configuracion from '../../components/administrador/Configuracion';

  export default {
    components: {
    Configuracion
    },
    data: () => ({
      today: new Date().toISOString().substr(0, 10),
      focus: new Date().toISOString().substr(0, 10),
      type: 'month',
      typeToLabel: {
        month: 'Mes',
        week: 'Semana',
        day: 'Dia',
        '4day': '4 Dias',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      total:[],
      // Adicionales...
      name: null,
      details: null,
      color: '#1976D2',
      dialog: false,
      dialogConfig:false,
      currentlyEditing: null,
      switchDesactivar:false,
      fechasDesactivadas:[],
    }),
    computed: {
      ...mapState(["token"]),
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
      isEvents () {
        if(this.type!='month') return this.events
         return this.total
      },
      
    },
    created() {
        this.getEvents()
        this.getFechasDesactivadas()
    },
    mounted () {
      this.$refs.calendar.checkChange()
      this.getFechasDesactivadas()
    },
    methods: {
        disabledRange: function (date) {
          let flag=false
          var actDate= new Date(date+"T05:00:00.000+00:00").setHours(0, 0, 0, 0) 
          var today=new Date(new Date().toISOString().substr(0, 10)+"T05:00:00.000+00:00").setHours(0, 0, 0, 0)         
          if (actDate<today)  flag=true
             
            
          this.fechasDesactivadas.forEach(element => {
            var minDate = new Date(element.from).setHours(0, 0, 0, 0);
            var maxDate =  new Date(element.to).setHours(0, 0, 0, 0);
            
            
            if (actDate >= minDate && actDate <= maxDate ){
              flag=true
            }
            
          });
          // console.log(date,flag);
          return flag
        },
        async getFechasDesactivadas() {
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
            this.fechasDesactivadas=JSON.parse(JSON.stringify(data))
          } catch (error) {
            console.log(error);
          }
        },
       async getEvents(){
           try {
              //  const snapshot= await db.collection('eventos').get();
               const events=[]
                const res = await fetch(process.env.VUE_APP_BASE_URL+"/api/habitaciones/", {
                headers: {"Content-Type": "application/json","auth-token": this.token }
                },);
                const { data, error } = await res.json();    
                if (error) {
                  console.log(error);
                  return;
                }
                let individual={ocupadas:0,disponibles:0,deshabilitado:0}
                let doble={ocupadas:0,disponibles:0,deshabilitado:0}
                let familiar={ocupadas:0,disponibles:0,deshabilitado:0}
                  
                  
                  
                
                data.forEach(doc=>{
                    if (doc.tipo_habitacion=='Individual') {
                        if (doc.estado=='Ocupado') {doc.color='#FF673D',individual.ocupadas++}
                        else if(doc.estado=='Disponible'){
                          doc.color='#66D7D1'
                          doc.start=new Date().toISOString().substr(0, 10)
                          doc.end=new Date().toISOString().substr(0, 10)
                          individual.disponibles++
                        }else{
                          doc.color='#181818'
                          doc.start=new Date().toISOString().substr(0, 10)
                          doc.end=new Date().toISOString().substr(0, 10)
                          individual.deshabilitado++
                        } 
                    }
                    if (doc.tipo_habitacion=='Doble') {
                        if (doc.estado=='Ocupado') {doc.color='#FF673D',doble.ocupadas++}
                        else if(doc.estado=='Disponible'){
                          doc.color='#66D7D1'
                          doc.start=new Date().toISOString().substr(0, 10)
                          doc.end=new Date().toISOString().substr(0, 10)
                          doble.disponibles++
                        }else{
                          doc.color='#181818'
                          doc.start=new Date().toISOString().substr(0, 10)
                          doc.end=new Date().toISOString().substr(0, 10)
                          doble.deshabilitado++
                        } 
                    }
                    if (doc.tipo_habitacion=='Familiar') {
                        if (doc.estado=='Ocupado') {doc.color='#FF673D',familiar.ocupadas++}
                        else if(doc.estado=='Disponible'){
                          doc.color='#66D7D1'
                          doc.start=new Date().toISOString().substr(0, 10)
                          doc.end=new Date().toISOString().substr(0, 10)
                          familiar.disponibles++
                        }else{
                          doc.color='#181818'
                          doc.start=new Date().toISOString().substr(0, 10)
                          doc.end=new Date().toISOString().substr(0, 10)
                          familiar.deshabilitado++
                        } 
                    }
                   events.push(doc);
                })
                this.total.push(
                {
                    name: `Individual-> O:${individual.ocupadas} D:${individual.disponibles} N:${individual.deshabilitado}`, 
                    end:new Date().toISOString().substr(0, 10),
                    start:new Date().toISOString().substr(0, 10),
                    color:'#FF673D',
                    tipo_habitacion:'Individual'
                },{
                    name:`Dobles-> O:${doble.ocupadas} D: ${doble.disponibles} N:${doble.deshabilitado}`,
                    end:new Date().toISOString().substr(0, 10),
                    start:new Date().toISOString().substr(0, 10),
                    color:'#66D7D1',
                    tipo_habitacion:'Doble'
                },{
                    name:`familiares-> O:${familiar.ocupadas} D: ${familiar.disponibles} N:${familiar.deshabilitado}`,
                    end:new Date().toISOString().substr(0, 10),
                    start:new Date().toISOString().substr(0, 10),
                    color:'#181818',
                    tipo_habitacion:'Familiar'
                });
                // events.push(data)
                // console.log(events);
               this.events=events
               
                
           } catch (error) {
            console.log(error);
           }
       },
       
      
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      showEventRedirect ({ nativeEvent, event }) {
        if (this.type=='month') {
            this.$router.push('/admin/habitaciones?filtro='+event.tipo_habitacion)
        }
        
      },
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    },
  }
</script>
<style >
 
</style>