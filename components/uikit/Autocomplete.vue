<template lang="pug">
.autocomplete
    input.autocomplete__input(
        v-model="userInput"
    )
    ul.autocomplete__suggests(
        v-if="suggestList"
    )
        li.autocomplete__suggests._item(
            v-for="(item, index) in suggestList"
            :key="index"
        )
            | {{ item }}
</template>

<script>
export default {
    name: 'Autocomplete',

    props: {
        dataset: {
            required: false,
            type: Array,
            default: () => ['qwerty', 'aseq', 'text', 'test']
        }
    },

    data() {
        return {
            userInput: ''
        };
    },

    computed: {
        suggestList() {
            const userInput = this.userInput.toString().toLowerCase();
            const length = userInput.length;
            const result = [];

            for (let i = 0; i < this.suggestList.length; i++) {
                const substring = suggestList[i].subst(0, length);
                if (substring === userInput) {
                    result.push(suggestList[i]);
                }
            }

            return result;
        }
    },

    watch: {
        userInput() {
            this.suggestList();
        }
    }
};
</script>

<style lang="scss" scoped>
.autocomplete {
    &__suggests {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
    }
}
</style>
