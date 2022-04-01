<template>
    <v-container>
    <v-app-bar app elevation="0" class="appbar">
      <v-app-bar-nav-icon @click="drawer= !drawer" v-if="isMobile"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
          Admin
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn text class="success mr-5">ingreso</v-btn> -->
      <!-- <v-btn to="/" exact text class="gray">
        <span>Home</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn> -->
      <v-btn text class="gray" @click="cerrarSesion">
        <span>Log out</span>
        <v-icon>mdi-login-variant </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer mobile-breakpoint="600" app floating  dark v-model="drawer" class="withBackground"  src="@/assets/admin-background.png">
      <v-list-item >
        <v-list-item-avatar>
              <v-img src="@/assets/admin.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          
          <v-list-item-title class="text-h8">
            Administrador
          </v-list-item-title>
          <v-list-item-subtitle>
            dashboard 
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group  active-class="white--text navbarActive text--accent-4">
          <v-list-item :to="{name: 'login'}" exact>
            <v-list-item-icon >
              <v-icon>mdi-calendar-month</v-icon>
            </v-list-item-icon>
            <v-list-item-title>login</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{name: 'calendario'}">
            <v-list-item-icon>
              <v-icon>mdi-calendar-month</v-icon>
            </v-list-item-icon >
            <v-list-item-title >Calendario</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{name: 'habitaciones'}">
            <v-list-item-icon>
              <v-icon>mdi-file-table</v-icon>
            </v-list-item-icon >
            <v-list-item-title >Habitaciones</v-list-item-title>
          </v-list-item>
          

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    </v-container>
    
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name:'Navbar',
  data() {
    return {
        drawer:false
    }
  },
  computed: {
    isLogin() {
      return this.$route.name !== 'login'
    },
    isMobile() {
      if (!this.$vuetify.breakpoint.xsOnly) {
          this.drawer=true
      }
      return this.$vuetify.breakpoint.xsOnly;
    }
  },
  created() {
  },
  methods: {
    ...mapActions(['cerrarSesion']),
  }
}
</script>
<style >
.navbarActive {
  background-color: #4CAF50;
}
.appbar{
  background-color: #EEEEEE!important;
}
</style>