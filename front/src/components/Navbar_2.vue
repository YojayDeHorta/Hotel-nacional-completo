<template>
    <div fluid>
        <div class="topnav" id="myTopnav">
            <a class="a_logo" style='width:50px !important;padding: 0 !important;margin: 0 !important;background-color: transparent;'>
                <v-btn class='btn_logo' to='/' height='100%' depressed elevation='0' style='background-color:transparent;'>
                    <v-img class='mt-1' width='45px' src="@/assets/logo.jpg" alt="" style='background-color:transparent;'>
                    </v-img>
                    <img>
                </v-btn>
            </a>
            <div class='navbar_2' style="#border:6px solid yellow">
                <a style='display: none;'></a>
                <v-btn class='btn_route' to='/' depressed>
                    <a class='a_route'>
                        {{ $t('home') }}
                    </a>
                </v-btn>
                <v-btn to='/services' class='btn_route' elevation='0' disable>
                    <a>
                        {{ $t('services') }}
                    </a>
                </v-btn>
                <v-btn class='btn_route' to='/gallery' elevation='0' depressed>
                    <a class='a_route'>
                        {{ $t('gallery') }}
                    </a>
                </v-btn>
                <v-btn class='btn_route' to='/offers' elevation='0'>
                    <a class='a_route'>
                        {{ $t('offers') }}
                    </a>
                </v-btn>
                <v-btn class='btn_route' to='/review' elevation='0'>
                    <a class='a_route'>
                        {{ $t('contact') }}
                    </a>
                </v-btn>
                <v-btn class='btn_route' to='/book' elevation='0'>
                    <a class='a_route'>
                        {{ $t('book') }}
                        <v-icon>
                            mdi-arrow-right-thin
                        </v-icon>
                    </a>
                </v-btn>
         
                   <languaje></languaje> 
          
                
                <!--
                <div class="dropdown">
                    <button class="dropbtn">Languaje
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content" v-model="$i18n.locale" @change="changeLanguage">
                        <a value='es'>Español</a>
                        <a value='en'>Ingles</a>
                        <a value='fra'>Frances</a>
                    </div>
                </div>
            -->
            </div>
            <a href="javascript:void(0);" style="font-size:15px;" class="icon" v-on:click="myFunction()">&#9776;</a>
        </div>
    </div>
</template>
<style scoped>
a {

    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;



}



.a_route {
    #background-color: transparent !important;

}

.btn_route {
    #border: 5px solid red;
    padding: 0 !important;
    margin: 0 !important;
    background-color: transparent !important;
    height: 100% !important;
    margin-left: 5px !important;
}



.navbar_2 {
    display: flex;
    justify-content: flex-end;
    #border: 3px solid red !important;
}

body {
    margin: 0;
    font-family: Arial
}

.a_logo {
    background-color: transparent !important;
}

.a_logo:hover {
    #border: 5px solid red !important;
    background-color: transparent !important;
}

.btn_logo:hover {
    #border: 5px solid purple;
    background-color: transparent !important;
}

.topnav {
    overflow: hidden;
    background-color: #ffffff;
}

.topnav a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
}

.active {
    background-color: #04AA6D;
    color: black;
}

.topnav .icon {
    display: none;
}

.dropdown {
    float: left;
    overflow: hidden;
}

.dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: black;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.topnav a:hover,
.dropdown:hover .dropbtn {
    background-color: #2C3A52;
    color: white;
}

.dropdown-content a:hover {
    background-color: #ddd;
    color: black;
}

.dropdown:hover .dropdown-content {
    display: block;
}

@media screen and (max-width: 960px) {
    .navbar_2 {
        display: block;
    }

    .topnav a:not(:first-child),
    .dropdown .dropbtn {
        display: none;
    }

    .topnav a.icon {
        #border: 5px solid black;
        float: right;
        display: block;
        #font-size: 20rem;
    }
}

@media screen and (max-width: 960px) {
    .navbar_2 {
        display: block;
    }

    .topnav.responsive {
        position: relative;
    }

    .topnav.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }

    .topnav.responsive .dropdown {
        float: none;
    }

    .topnav.responsive .dropdown-content {
        position: relative;
    }

    .topnav.responsive .dropdown .dropbtn {
        display: block;
        width: 100%;
        text-align: left;
    }
}
</style>
<script>


    import languaje from '../components/Language'




export default {

    components:{
        languaje
    },


    methods: {
        myFunction: function() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },
      changeLanguage(obj){
            localStorage.setItem('language',obj.target.value)
        }
    }
}
</script>