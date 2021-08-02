<template>
    <header>
        <div class="container header header--bg">
            <h1 class="center">IP Address Tracker</h1>
            <VInput />
        </div>
    </header>
</template>

<script>

import VInput from '@/components/VInput.vue';

    export default {
        name: 'VHeader',
        components: {
            VInput,
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.header {
    z-index: 1 !important;
    min-height: 30rem;
    padding: 3rem 2rem;
    transition: 250ms;

    @media screen and (max-width: 467px) {
        padding: 1.5rem;
    }

    h1 {
        color: $white;
        margin-bottom: 3rem;

        @media screen and (max-width: 767px) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
    }


}

.header--bg{
    background-image: url('../assets/images/pattern-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 100%;
}


</style>