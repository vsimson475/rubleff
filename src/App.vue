<template>
  <ThePage></ThePage>
</template>

<script>
import ThePage from '@/components/ThePage';

export default {
  name: 'App',
  components: {
    ThePage
  }
}
</script>

<style lang="scss">
  @import '@/style/style';

  #app {
    font-family: 'Open Sans';

    height: 100%;
  }
</style>
