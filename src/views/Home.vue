<template>
  <div class="home">
    <VHeader />
    <VContent />
  </div>
</template>

<script>

import VHeader from '@/components/VHeader.vue';
import VContent from '@/components/VContent.vue';

export default {
  name: 'Home',
  components: { 
    VHeader,
    VContent
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';



</style>
