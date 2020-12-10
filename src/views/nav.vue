<template>
    <div>
        <navbar/>
        <mainn/>
        <foot/>
    </div>
</template>
<script>
    import navbar from "@/components/navbar.vue";
    import foot from "@/components/footer.vue";
    import mainn from "@/components/main.vue";
    export default {
        components: {
            navbar,
            foot,
            mainn,
        }
    }

</script>