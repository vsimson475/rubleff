<template>
  <section class="catalog">
    <AppNavigationCatalog :links="categories"></AppNavigationCatalog>
    <div class="catalog__product">
        <AppProducts :products="products"></AppProducts>
    </div>
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
            ],
            products: [
                {
                    id: 1,
                    name: 'Ноутбук packard bell P5WS0',
                    price: '13000',
                    img: 'computer.png'
                },
                {
                    id: 2,
                    name: 'Телефон Xiaomi Redmi Note 9 3/64GB',
                    price: '9900',
                    img: 'phone.png'
                },
                {
                    id: 3,
                    name: 'Ноутбук packard bell P5WS0',
                    price: '13000',
                    img: 'computer.png'
                },
                {
                    id: 4,
                    name: 'Ноутбук packard bell P5WS0',
                    price: '13000',
                    img: 'computer.png'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .catalog {
        display: flex;
        column-gap: 46px;

        margin-top: 72px;
        margin-bottom: 102px;
    }
</style>