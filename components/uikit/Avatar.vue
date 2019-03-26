<template lang="pug">
span.avatar
    img.avatar__image(
        :class="classes",
        :url="url",
        alt="Avatar"
    )
</template>

<script>
export default {
    name: 'Avatar',

    props: {
        type: {
            required: false,
            type: String,
            default: 'circle'
        },

        size: {
            required: false,
            type: String,
            default: 'medium'
        },

        url: {
            required: true,
            type: String
        }
    },

    computed: {
        classes() {
            const { size, type } = this;
            const classes = [];

            if (size) {
                classes.push(size);
            }

            if (type) {
                classes.push(type);
            }

            return classes;
        }
    }
};
</script>
