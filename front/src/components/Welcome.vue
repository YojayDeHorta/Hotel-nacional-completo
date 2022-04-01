<template>
    <div>
        <v-container>
            <v-row class='img_1'>
                <v-col cols='6'>
                    <div>
                        <h1>WELCOME TO Hotel Nacional</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu magna mauris. Phasellus malesuada turpis nec massa elementum, id consectetur lectus vestibulum. Sed viverra sapien ut elit dapibus, a finibus diam fringilla. In tincidunt molestie odio quis efficitur. Integer fermentum efficitur ligula, a consectetur enim sodales id.
                        </p>
                    </div>
                </v-col>
                <v-col cols='6'>
                    <v-img class='img' src='@/assets/hotel_1.png'>
                    </v-img>
                </v-col>
            </v-row>
            <v-row class='img_1'>
                <v-col cols='6'>
                    <div>
                        <h1>WELCOME TO Hotel Nacional</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu magna mauris. Phasellus malesuada turpis nec massa elementum, id consectetur lectus vestibulum. Sed viverra sapien ut elit dapibus, a finibus diam fringilla. In tincidunt molestie odio quis efficitur. Integer fermentum efficitur ligula, a consectetur enim sodales id.
                        </p>
                    </div>
                </v-col>
                <v-col cols='6'>
                    <v-img class='img' src='@/assets/hotel_2.png'>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'welcome'
}
</script>
<style scoped>
p {
    text-align: justify;
}

.img_1 {
    border: 5px solid black;
    height: 500px;
}

.img {
    width: 100%;
    border: 5px solid purple;
    height: 300px;
}
</style>