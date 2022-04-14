<template>
    <div class='Marco_Secundario' fluid>
        <navbar_2 />
        <div class='parallax' style='z-index:10'>
            <div class='gallery_txt'>
                <h1 class='text-center'>Our <strong>Gallery</strong></h1>
                <p class='text_gallery text-center mt-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Laudantium doloremque eveniet, eligendi sequi, rem officia? Omnis suscipit asperiores elit. Laudantium doloremque eveniet, eligendi sequi, rem officia? Omnis suscipit asperiores.
                </p>
            </div>
        </div><br>
        <div class='Marco_Secundario mt-5 mb-5'>
        
            <system_gallery />

        </div>
        <pie_pagina class='pie_pagina' />
    </div>
</template>
<style scoped>


h1{
    font-family: 'Epilogue', sans-serif;
    font-family: 'GFS Didot', serif;
    font-family: 'Poppins', sans-serif;
}

p{
    font-weight: initial;
}


.Marco_Secundario {
    background-color: #f8f8f8 !important;
}

.parallax {
    display: flex !important;
    justify-content: center !important;
    border: 5px solid black !important;
    height: 450px !important;
    #border: 5px solid red !important;
    background-image: url('@/assets/slider.webp');
    background-size: cover;
    background-position: center;
}

.gallery_txt {
    color: white !important;
    background: rgba(255, 255, 255, 0.15);
    #border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    #border: 1px solid rgba(255, 255, 255, 0.46);
    margin: auto !important;
    width: 80%;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem;

}


.Marco_Secundario {
    #border: 5px solid red !important;
}

.text_gallery {
    #border: 5px solid black !important;
    width: 100%;
}

@media (max-width:960px) {

    .Marco_Secundario {
        #border: 5px solid red !important;
    }

    .parallax {
        #border: 4px solid purple !important;
    }

    .gallery_txt{
        width: 92% !important;
        padding: 0.5rem !important;
    }


    .text_gallery {
        #border: 5px solid red !important;
        text-align: justify !important;
        width: 100%;
        padding: 0.5rem;
    }

}
</style>
<script>
import navbar_2 from '../components/Navbar_2'
import pie_pagina from '../components/Footer'
import system_gallery from '../components/System_Gallery'

export default {

    components: {
        navbar_2,
        pie_pagina,
        system_gallery

    }

}
</script>