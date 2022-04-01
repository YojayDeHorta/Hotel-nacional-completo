<template>
    <v-container class='footer' fluid>
        <v-row class='row_footer'>
            <v-col class='col img-col' cols='6' md='2' lg='2'>
                <v-img class='' src='@/assets/logo.jpg' style='width: 100px;'></v-img>
            </v-col>
            <v-col class='col about' cols='6' sm='6' md='3' lg='3'>
                <h3> About</h3><br>
                <p>About The Diamond </p>
                <p>Contact us</p>
                <p>Latest News</p>
                <p> Jobs</p>
                <p> Privacy Policy</p>
            </v-col>
            <v-col class='col booking' cols='6' sm='6' md='2' lg='2'>
                <h3>Booking and services</h3> <br>
                <p> Book Rooms</p>
                <p> Offers </p>
                <p>Vacation Packages</p>
                <p> Gallery </p>
                <p>Reviews</p>
            </v-col>
            <v-col class='col contact' cols='6' sm='6' md='2' lg='2'>
                <h3> Contact Us</h3><br>
                <p>
                    Hotel Reservation:
                    123-456-7890
                </p>
            </v-col>
            <v-col class='col ' cols='12' sm='12' md='2' lg='3'>
                <h3 class='text-center'>Social</h3> <br>
                <ul>
                    <li>
                        <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                            <v-icon color='white'>
                                mdi-instagram
                            </v-icon>
                        </v-btn>
                    </li>
                    <li>
                    <li>
                        <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                            <v-icon color='white'>
                                mdi-twitter
                            </v-icon>
                        </v-btn>
                    </li>
                    <li>
                        <v-btn color="blue-grey" class="ma-2 white--text" icon small style='background-color: #566175 !important'>
                            <v-icon color='white'>
                                mdi-facebook
                            </v-icon>
                        </v-btn>
                    </li>
                </ul>
            </v-col>
        </v-row> <br> <br> <br>
        <hr style='background: grey;'>
        <v-row class='mt-5 mb-3'>
            <h5 class='text-center' style='margin: auto;'>© 2022 Hotel Nacional | All Rights Reserved</h5>
        </v-row>
    </v-container>
</template>
<script type="text/javascript">
export default {
    name: 'pie_pagina'
}
</script>
<style scoped>
.img-col {
    #border: 5px solid purple;
}


.footer {
    padding: 3.5rem;
    color: white !important;
    background-color: #2C3A52;
    #border: 5px solid black;
}

.row_footer{
    #border: 5px solid red;
}

.col {
    #border: 5px solid red !important;
}



ul {
    padding: 0 !important;
    display: flex;
    justify-content: center;
}

ul li {
    list-style: none;
    display: inline;
    #margin-right: 0.5rem;
    #margin: auto;

}

p {

    color: white !important;
    font-size: 0.9rem !important;
}



@media (min-width: 577px) and (max-width: 992px) {
     .footer {
        padding: 1rem !important;
        #border: 5px solid red !important;

    }

    .row_footer {
        #border: 5px solid purple;
        width: 98% !important;
        margin: auto;
    }

    .col {
        #border: 5px solid purple;
    }

    .img-col , .about{
        margin-top: 1rem;
    }

    .booking , .contact{
        #border: 5px solid red;
        margin-top:1.5rem ;
    }

    .about,
    .about p {
        text-align: end !important;
    }

    .contact,
    .contact p {
        #border: 5px solid red;
        text-align: end !important;
    }


}



@media (max-width: 576px) {
    .footer {
        padding: 1rem !important;
        #border: 5px solid red !important;

    }

    .row_footer {
        #border: 5px solid purple;
        width: 98% !important;
        margin: auto;
    }

    .col {
        #border: 5px solid purple;
    }

    .img-col , .about{
        margin-top: 1rem;
    }

    .booking , .contact{
        #border: 5px solid red;
        margin-top:1.5rem ;
    }

    .about,
    .about p {
        text-align: end !important;
    }

    .contact,
    .contact p {
        #border: 5px solid red;
        text-align: end !important;
    }





}
</style>