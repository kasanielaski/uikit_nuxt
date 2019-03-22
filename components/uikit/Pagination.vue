<template lang="pug">
nav.pagination
    ul.pagination__list
        li.pagination__list._item(
            v-for="(page, index) in computedPages",
            :key="index"
        )
            nuxt-link.pagination__list._link(
                :href="`/page/${page}`"
            )
</template>

<script>
export default {
    name: 'Pagination',

    props: {
        totalPages: {
            required: true,
            type: Number
        },
        currentPage: {
            required: true,
            type: Number
        }
    },

    computed: {
        computedPages() {
            const { currentPage, totalPages } = this;
            let result = ['1', '2', '3'];

            result.push(
                `${currentPage - 1}`,
                `${currentPage}`,
                `${currentPage + 1}`,
                `${totalPages - 2}`,
                `${totalPages - 1}`,
                `${totalPages}`
            );
            result = result.filter(item => item > 0 && item <= total);
            // убрать строгое сравнение, если кед сломается
            result = result.filter(
                (item, index) => result.indexOf(item) === index
            );
            result.reduce(
                (acc, current, i, r) =>
                    i !== 0 && current - r[i - 1] > 1
                        ? r.splice(i, 0, '...')
                        : acc,
                []
            );

            return result;
        }
    },

    created() {
        console.log(this.computedPages);
    }
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    width: 100%;
    padding: 0 2vw;
}
</style>
