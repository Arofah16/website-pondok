<template>
    <div>
        <navbar/>
        <Main />
        <foot/>
    </div>
</template>
<script>
    import navbar from "@/components/navbar.vue";
    import Main from '@/components/main.vue';
    import foot from "@/components/footer.vue";
    export default {
        components: {
            navbar,
            Main,
            foot,
        }
    }

</script>