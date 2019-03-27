<template lang="pug">
button.button(
    :class="classes",
    @click="onClick"
)
    slot(name="icon")
    slot(name="text")
</template>

<script>
export default {
    name: 'Button',

    props: {
        size: {
            required: false,
            type: String,
            default: 'medium'
        }
    },

    computed: {
        classes() {
            const classes = [];
            classes.push(`_${this.size}`);

            return classes;
        }
    },

    methods: {
        onClick() {
            this.$emit('onClick');
        }
    }
};
</script>

<style lang="scss" scoped>
.button {
    &._small {
        height: 18px;
    }

    &._medium {
        height: 24px;
    }

    &._big {
        height: 36px;
    }
}
</style>
