<template lang="pug">
.default-layout
    NavBar.default-layout__navbar
    SideBar.default-layout__sidebar(
        v-if="isSidebarVisible"
    )
    Nuxt.default-layout__container
</template>

<script>
import { mapGetters } from 'vuex';

import NavBar from '~/components/NavBar.vue';
import SideBar from '~/components/SideBar.vue';

export default {
    components: {
        NavBar,
        SideBar
    },

    computed: {
        ...mapGetters({
            isSidebarVisible: 'isSidebarVisible'
        })
    }
};
</script>

<style lang="scss">
html {
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.default-layout {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 60px 1fr;

    &__navbar {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
    }

    &__sidebar {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    &._container {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
}
</style>
