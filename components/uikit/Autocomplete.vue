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
            default: () => [
                {
                    id: 0,
                    value: 'name'
                },
                {
                    id: 1,
                    value: 'value'
                },
                {
                    id: 2,
                    value: 'qwerty'
                },
                {
                    id: 3,
                    value: 'test'
                }
            ]
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
                const substring = suggestList[i].value.slice(0, length);
                if (substring === userInput) {
                    result.push(suggestList[i].value);
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
