<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <AppLogo class="footer__logo"></AppLogo>
                <AppContactsFooter></AppContactsFooter>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
    .footer {
        background: #FFFFFF;

        box-shadow: 0px -8px 107px rgba(0, 0, 0, 0.11);

        flex: 0 0 auto;

        padding: 10px 0 60px;
    }

    .footer__container {
        display: flex;
        justify-content: space-between;
    }

    .footer__logo {
        max-width: 218px;
    }
</style>