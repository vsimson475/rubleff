<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li
            class="navigation__item"
            :class="{'_active': $router.currentRoute.value.path.substring(0, 2) === '/'}">
                <router-link
                class="navigation__href link-red"
                to="/"
                >
                    Главная
                </router-link>
            </li>
            <li
            class="navigation__item"
            :class="{'_active': $router.currentRoute.value.path.substring(0, 8) === '/catalog'}"
            >
                <router-link
                class="navigation__href link-red"
                to="/catalog"
                >
                    Каталог
                </router-link>
            </li>
            <li
            class="navigation__item"
            :class="{'_active': $router.currentRoute.value.path.substring(0, 9) === '/contacts'}"
            >
                <router-link
                class="navigation__href link-red"
                to="/contacts"
                >
                    Контакты
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNavigationHeader'
}
</script>

<style lang="scss" scoped>
    @import '@/style/vars';

    .navigation {
        display: flex;
        align-items: center;

        font-size: 14px;
    }

    .navigation__list {
        display: flex;
        align-items: center;
    }

    .navigation__item {

        &._active {
            .navigation__href {
                color: #FF0000;
            }
        }
    }
</style>