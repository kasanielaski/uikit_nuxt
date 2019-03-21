<template lang="pug">
.pagination
    | pagination_content
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component

export default class Pagination extends Vue {
    @Prop({
        required: true,
        type: Number
    })
    currentPage!: number;
};
</script>

