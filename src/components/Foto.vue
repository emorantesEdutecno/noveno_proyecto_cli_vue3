<template>
    <div id="Foto">
        <h1>Componente Foto</h1>
        <h3>Foto {{  id  }}</h3>
        <img v-bind:src="rutaImagen" alt="" /><br>
        <router-link to="/fotos">Volver al Album</router-link>
    </div>
</template>

<script>
export default{
    name:'Foto',
    data: function(){
        return{
            rutaImagen:'',
        }
    },
    methods:{

    },
    computed:{
        id:function(){
            return this.$route.params.id;
        }
    },
    // hook
    created(){
        this.rutaImagen=`https://picsum.photos/200/300?grayscale/${this.id}`;
    }

}
</script>

<style scoped>
    #Foto{
        background-color: dodgerblue;
        color: white;
    }
</style>