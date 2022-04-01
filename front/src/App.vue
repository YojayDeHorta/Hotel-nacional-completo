<template>
  <v-app>
     <Navbar v-if="isAdmin&&isLogin"/> 
    <Navbar1 v-if="!isAdmin"/>
    <v-main class="gris">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from './components/administrador/Navbar';
import Navbar1 from './components/Navbar_1.vue'
export default {
  components: {
    Navbar1,
    Navbar
  },
  data() {
    return {

    }
  },
  
  computed: {
    isLogin() {
      return this.$route.name !== 'login'
    },
    isAdmin() {
      return this.$route.name === 'calendario'||this.$route.name === 'habitaciones'||this.$route.name === 'login'
    }
  },
  methods: {
    ...mapActions(['cerrarSesion'])
  }
}
</script>
<style >
  .gris{
    background-color: #EEEEEE;
  }
</style>
