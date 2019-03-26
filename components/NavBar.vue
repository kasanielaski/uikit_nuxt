<template lang="pug">
nav.navbar
    ul.navbar__list
        li.navbar__list._item(
            @click="toggleSidebar()"
        )
            | show/hide sidebar
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'NavBar',

    methods: {
        ...mapActions({
            toggleSidebar: 'toggleSidebar'
        })
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: darkseagreen;
}
</style>
