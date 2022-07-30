<template>
  <section class="catalog">
    <AppNavigationCatalog :links="categories"></AppNavigationCatalog>
  </section>
</template>

<script>
export default {
    name: 'PageCatalog',
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'ТВ и видеотехника',
                    link: 'tv'
                },
                {
                    id: 2,
                    name: 'Техника для кухни',
                    link: 'kitchen'
                },
                {
                    id: 3,
                    name: 'Компьютеры',
                    link: 'computer'
                },
                {
                    id: 4,
                    name: 'Фототехника',
                    link: 'photoequipment'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>