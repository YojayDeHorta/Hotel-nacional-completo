<template>
    <select class="form-select" aria-label="Default select example" v-model="$i18n.locale" @change="changeLanguage">
        <option value="es">Español</option>
        <option value="en">Ingles</option>
        <option value="fra">Frances</option>
    </select>
</template>
<script>
export default {
    methods: {
        changeLanguage(obj) {
            localStorage.setItem('language', obj.target.value)
        }
    }
}
</script>
<style scoped>
select {
    outline: none !important;
    border: none !important;
    #border: 1px solid red !important;
    #border-bottom: 1px solid #2c3a52 !important;
    background-image: url("@/assets/arrow-down.png");
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: center right;
     #border: 1px solid red !important;
    width: 7%;
    padding: 0.5rem;
    /*padding-left: 0.4rem;
    padding-right: 1rem;
    padding-top: 1rem;*/
    cursor: pointer;

}

select option {
    padding: 50px !important;
}
</style>