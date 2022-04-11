<template>
    <v-container fluid style='#border: 5px solid blue;padding: 0 !important;margin: 0 !important;'>
        <v-card class="mx-auto" style="max-width: 500px;background-color: transparent !important;margin: 0 !important;" elevation='0' fluid>
            <v-form ref="form" v-model="form" class="form_data pa-4 pt-6"  elevation='0'>
                <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
                    <template v-slot:label>
                        I agree to the&nbsp;
                        <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
                        &nbsp;and&nbsp;
                        <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
                    </template>
                </v-checkbox>
            </v-form>
            <v-dialog v-model="dialog" absolute max-width="400" persistent>
                <v-card>
                    <v-card-title class="text-h5 grey lighten-3">
                        Legal
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn text @click="agreement = false, dialog = false">
                            No
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="white--text" color="deep-purple accent-4" @click="agreement = true, dialog = false">
                            Yes
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </v-container>
</template>
<style scoped>
    .form_data{
        padding: 0 !important;
        margin: 0 !important;
        #border: 5px solid red !important;
    }
</style>
<script>
export default {
	data: () => ({
      agreement: false,
      bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
      dialog: false,
      email: undefined,
      form: false,
      isLoading: false,
      password: undefined,
      phone: undefined,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),

}
</script>