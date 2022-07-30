<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AppButton'
}
</script>

<style lang="scss" scoped>
    @import '@/style/vars';

    .button {
        background: #FF4444;

        border: 1px solid rgba(0, 0, 0, 0);

        color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 700;

        transition: $transitionTimeDefault;

        &:hover,
        &:active {
            background: #FFFFFF;

            border: 1px solid #000000;

            color: #000000;
        }
    }
</style>