<template>
    <v-container class='container' fluid>
        <v-row class='row text-center'>
            <v-col class='col' cols='5' sm='2' md='1' lg='1' xl='1'>
                <p class="font-weight-thin">GUESTS</p>
                <h2>10</h2>
            </v-col>
            <v-col class='col' cols='5' sm='2' md='2'  lg='2' xl='2'>
                <p class="font-weight-thin">CHECK IN</p>
                <h2>28 Feb</h2>
            </v-col>
            <v-col class='col' cols='5' sm='2' md='2' lg='2' xl='2'>
                <p class="font-weight-thin">CHECK OUT</p>
                <h2>10 Mar</h2>
            </v-col>
            <v-col class='col' cols='5' sm='3' md='2' lg='2' xl='2'>
                <p class="font-weight-thin">PROMO CODE</p>
                <h2>Promo Code</h2>
            </v-col>
            <v-col class='col btn' cols='10' sm='3' md='2' lg='2' xl='2' style='background-color: #5d85d0 !important;'>
                <v-btn class='btn_li' elevation="0" large x-large x-small style='background-color: #5d85d0 !important;'>BOOK NOW</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
    #border: 5px solid red;
    position: relative;
    top: -7rem;
}


.col {
    color: white !important;
    margin-right: 0.2rem;
    background-color: #2c3a52 !important;
    #margin: 0;
    padding: 0.5rem;
}

p {
    font-size: 0.7rem;
    margin: 0 !important;
}

h2 {
    #border: 5px solid black;
}

.btn {
    opacity: 0.8;
}

.btn_li {
    #border: 5px solid red !important;
    width: 100%;
    color: white !important;
    outline: none;
    border: none;


}

.row {
    display: flex;
    justify-content: center;
    flex-direction: row;
}

@media (min-width: 600px) and (max-width: 960px) {

.container{
    margin: 0;
    padding: 0;
    width: 100% !important;
    #border: 5px solid purple;
}
.container .row{
    width: 100% !important;
    #border: 5px solid black;
     padding: 0 !important;
    margin: 0 !important;
}

.col{
    #border: 5px solid green;
    height: 70px !important;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

p {
    font-size: 0.8rem;
    margin: 0 !important;
}

h2 {
     font-size: 1rem;
}




}

@media (max-width: 599px) {


    p {
        font-size: 0.6rem;
        margin: 0 !important;
    }

    h2 {

        font-size: 1.3rem;
    }

    .btn_li {
        font-size: 1.2rem;
    }

    .btn {
        width: 50% !important;
    }


    .container {
        position: relative;
        width: 100% !important;
        top: -15rem !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    .row {
        border: 5px solid black;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    .col {
        margin-right: 0.2rem;
        #border-right: 1px solid white;
        margin-top: 0.5rem;
    }



}
</style>