<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control">
                <button class="button is-info" @click="addCount1()">
                    +
                </button>
            </p>
            <p class="control">
                <input class="input" type="number" :value ="number">
            </p>

            <p class="control">
                <button class="button is-success" @click="subCount1()">
                    -
                </button>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed:{


            number(){
                return this.$store.getters.number1
            }
        },
        methods:{
            addCount1(){
                this.$store.dispatch('addCount3')
            },
            subCount1(){
                this.$store.dispatch('subCount3')
            }

        }
    }

</script>