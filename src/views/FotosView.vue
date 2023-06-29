<template>
    <div id="FotosView">
        <h1> Componente de FotoSSSSS</h1>
        <div class="grid_foto">
            <div v-for="i in 8" v-bind:key="i">
                <h3> Foto {{ i }}</h3>
                <a v-on:click="redirect(i)">
                    <img v-bind:src="srcImage(i)" alt="">
                </a>
            </div>

        </div>
    </div>
</template>

<script>
export default{
    name: 'FotosView',
    data: function(){
        return{

        }
    },
    methods:{
        srcImage:function(id){
            return `https://picsum.photos/200/300?grayscale/${id}`;
        },
        redirect:function(id){
            this.$router.push(`/fotos/${id}`);
        },
    }
}
</script>

<style scoped>
#FotosView{
    background-color: indianred;
}

.grid_foto{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}

</style>