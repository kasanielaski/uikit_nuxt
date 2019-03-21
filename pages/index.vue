<template lang="pug">
section.container
    Header
</template>

<script>
import Header from '~/components/Header.vue';

export default {
    name: 'IndexPage',

    components: {
        Header
    }
};
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
