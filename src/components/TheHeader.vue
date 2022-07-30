<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <AppLogo class="header__logo"></AppLogo>
                <AppNavigationHeader></AppNavigationHeader>
                <AppInputSearch></AppInputSearch>
                <AppContactsHeader></AppContactsHeader>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
    .header {
        margin-top: 39px;
    }

    .header__container {
        background: #FFFFFF;

        box-shadow: 0px -5px 3px rgba(228, 228, 228, 0.2), 0px 5px 8px rgba(162, 162, 162, 0.2);

        display: flex;

        padding: 6px 13px;
    }

    .header__logo {
        max-width: 112px;
    }
</style>