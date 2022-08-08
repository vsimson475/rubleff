<template>
    <div class="price">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AppPriceRuble'
}
</script>

<style lang="scss" scoped>
    .price {
        &::after {
            content: "₽ ";
        }
    }
</style>