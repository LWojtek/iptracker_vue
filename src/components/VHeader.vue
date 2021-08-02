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
    min-height: 25rem;
    padding: 3rem 5rem;

    h1 {
        color: $white;
        margin-bottom: 3rem;
    }
}

.header--bg{
    background-image: url('../assets/images/pattern-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 100vw;
}


</style>