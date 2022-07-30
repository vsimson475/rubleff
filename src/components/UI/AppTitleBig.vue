<template>
  <div class="title-big">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'AppTitleBig'
}
</script>

<style lang="scss" scoped>
    .title-big {
        font-size: 40px;

        @media (max-width: 1024px) {
            font-size: 32px;
        }

        @media (max-width: 400px) {
            font-size: 24px;
        }
    }
</style>