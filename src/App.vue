<template>
    <v-app>
        <navbar />
        <router-view></router-view>
        <foot />
    </v-app>
</template>

<script>
    import navbar from "@/components/navbar.vue";
    import foot from "@/components/footer.vue";

    export default {
        components: {
            navbar,
            foot,
        }
    }

</script>