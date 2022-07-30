<template>
    <div class="navigation-catalog">
        <AppTitle class="navigation-catalog__title">
            Каталог
        </AppTitle>
        <ul class="navigation-catalog__list">
            <li
            class="navigation-catalog__item"
            v-for="link in links"
            :key="link.id"
            >
                <router-link
                class="navigation-catalog__link link-red"
                :class="$router.currentRoute.value.path === `/catalog/${link.link}` ? '_active' : null"
                :to="`/catalog/${link.link}`">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppNavigationCatalog',
    props: {
        links: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .navigation-catalog__title {
        margin-bottom: 24px;
    }

    .navigation-catalog__list {
        display: flex;
        flex-direction: column;
        grid-gap: 20px;
    }
</style>