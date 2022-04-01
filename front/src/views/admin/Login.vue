<template>
  <v-container class="home" fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <form @submit.prevent="login(usuario)">
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account"
                  name="login"
                  label="Ingrese el usuario"
                  type="text"
                  v-model="usuario.user"
                ></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="usuario.password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
export default {
  data() {
    return {
      usuario: {
        user: "administrador",
        password: "123456",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
