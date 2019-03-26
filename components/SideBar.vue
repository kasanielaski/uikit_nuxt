<template lang="pug">
nav.sidebar
    ul.sidebar__list
        li.sidebar__list._item(
            v-for="(path, index) in linkList",
            :key="index"
        )
            NuxtLink.sidebar__list._link(
                :to="`/uikit/${path}`"
            )
                | {{ path }}
</template>

<script>
export default {
    name: 'SideBar',

    data() {
        return {
            linkList: ['autocomplete', 'avatar', 'pagination']
        };
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: aqua;

    &__list {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        list-style-type: none;

        &._item {
            margin-top: 10px;
        }

        &._link {
            color: initial;
            text-decoration: none;
        }
    }
}
</style>
