<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'AppTitle'
}
</script>

<style lang="scss" scoped>
    .title {
        font-size: 32px;

        @media (max-width: 400px) {
            font-size: 24px;
        }
    }
</style>