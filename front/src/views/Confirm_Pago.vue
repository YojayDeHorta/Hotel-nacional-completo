<template>
    <div>
        <v-container class='Factura'>
            <v-row>
                <v-col>
                    <div class='header_factura '>
                        <h2 class='d-flex'>
                            <h1>
                                <img src="@/assets/logo.jpg" alt="" style='width: 70px;'>
                            </h1>
                            <h1>
                                <p>Hotel Nacional</p>
                                <p>Calle Lorem lorem lorem, 9</p>
                                <p>lorem , España</p>
                            </h1>
                        </h2>
                        <h3>
                            Guest details - Step 2 of 2
                        </h3>
                    </div>
                    <div>
                        <h1>Reservation data</h1>
                        <label>*All the are mandatary except if otherwise stated</label>
                        <form action="">
                            <div class='d-flex'>
                                <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
                                <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
                            </div>
                            <div class='d-flex'>
                                <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
                                <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
                            </div>
                            <div>
                                <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
                                <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
                            </div>
                        </form>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        Marco 2
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class='footer_book' fluid style='margin: auto;width: 92%;'>
            <div>
                <img src="@/assets/logo.jpg" alt="" style='width: 70px;'>
            </div>
            <hr>
            <div style='display: flex;' class='mt-5'>
                <p style="width: 50%;">© 2022 Hotel Nacional | All Rights Reserved</p>
                <p style="width: 50%;text-align: end;">Terms and conditions Privacy policy Security Careers</p>
            </div>
        </v-container>
    </div>
</template>
<style scoped>
.Factura {
    border: 5px solid red !important;
}

.Factura div {
    border: 5px solid black;
}

.header_factura {
    border: 5px solid blue !important;
}

.header_factura h1 {
    width: 50%;
    border: 5px solid yellow;
    font-size: 1rem !important;
    padding: 0 !important;
    margin: 0 !important;
}

.header_factura h1 p {
    padding: 0 !important;
    margin: 0 !important;
}
</style>
<script>
export default {

}
</script>