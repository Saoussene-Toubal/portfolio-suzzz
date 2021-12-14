<template>
    <div class="my-8 flex flex-col md:justify-center">
        <div>
            <h3 class="text-secondary-main text-lg  ">➔ hello everyone !</h3>
            <h1 class="text-primary-main  sm:text-5xl text-4xl ">{{profile.name}} {{profile.surname}}.</h1>
            <div class="bg-primary-main text-background shadow-lg text-center rounded-sm ">
                <h1 class="font-bold md:text-3xl s:text-l  text-l ">There are 2 ways to see life According to <b>albert einstein </b><br>"All is a miracle or nothing is a miracle"
</h1>
            </div>
        </div>
        <scene></scene>
        <div class="w-full my-2">
            <div class="text-label-info text-xl">
                Hello ! it's Saoussene and I'm {{age}} years old and I'm a web developer based in Boumerdes, Algeria, <br> specializing in web development and data science curious and full of energy looking for the new challenges <br> And open to any proposal .

            </div>
            <button class="text-primary-main rounded-sm text-lg p-4 border-2 hover:bg-transparent-primary my-4" 
                onclick="location.href='mailto:toubalsaoussene@gmail.com'">
                Touche ici !
            </button>
            
        </div>
    </div>
</template>

<script>
import scene from "@/components/scene.vue";
import { mapGetters } from "vuex";
export default {
    components: { scene },
    computed: { ...mapGetters(["profile", "projects", "age"]) }  
};
</script>
<style></style>
