<template>
    <v-snackbar v-model="snackbar.open" bottom right>
      {{ snackbar.text }}
      <v-btn color="error" class="ml-5" @click="snackbar.open = false">cerrar</v-btn>
    </v-snackbar>
</template>
<script>
export default {
    name: "vtoast",

    data() {
        return {
            snackbar:{
                open:false,
                text:''
            },
        }
    },
    methods: {
        show(data){
        this.snackbar.open=true
        this.snackbar.text=data.message
        },
    },
}
</script>