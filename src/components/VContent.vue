<template>
    <div>
        <VInfo v-if="!this.$store.state.isEmpty"/>
        <VMap />   
    </div>   
</template>

<script>

import VInfo from '@/components/VInfo.vue';
import VMap from '@/components/VMap.vue';

    export default {
        name: 'VContent',
        components: {
            VInfo,
            VMap
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';


</style>