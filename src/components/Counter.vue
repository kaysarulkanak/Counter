<template>
    <div class="container">
        <div class="field has-addons has-addons-centered" style="margin-top: 60px;">
            <p class="control">
                <button class="button is-info" @click="addCount()">
                    +
                </button>
            </p>
            <p class="control">
                <input class="input" type="number" :value ="number">
            </p>

            <p class="control">
                <button class="button is-success" @click="subCount()">
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
                return this.$store.getters.number
            }
        },
        methods:{
            addCount(){
                this.$store.dispatch('addCount')
            },
            subCount(){
                this.$store.dispatch('subCount')
            }

        }
    }

</script>