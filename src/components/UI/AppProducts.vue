<template>
    <ul class="products">
        <li
        class="product"
        v-for="product in products"
        :key="product.id"
        >
            <a class="product__card">
                <div class="product__image">
                    <img
                    class="product__img"
                    :src="require(`@/assets/${product.img}`)"
                    :alt="product.name"
                    >
                </div>
                <div class="product__text">
                    <h3 class="product__title">
                    {{ product.name }}
                    </h3>
                    <AppPriceRuble>
                        {{ product.price }}
                    </AppPriceRuble>
                </div>
            </a>
            <a
            class="product__order"
            href=""
            >
                <AppButton class="product__order_button">
                    Заказать
                </AppButton>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AppProducts',
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 52px 30px;
    }

    .product {
        display: flex;
        align-items: center;
        flex-direction: column;
        row-gap: 25px;
    }

    .product__card {
        background: #FFFFFF;

        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.25);

        display: flex;
        flex-direction: column;
        flex-grow: 1;

        padding: 16px 32px 10px;
    }

    .product__image {
        position: relative;

        padding-top: 9.11vw;
        margin: 0 auto;

        width: 78%;
    }

    .product__img {
        border-radius: 4px;

        box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);

        object-fit: cover;

        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
    }

    .product__text {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        margin-top: 10px;
    }

    .product__title {
        font-size: 16px;
        font-weight: 300;
    }

    .product__order {
        width: 92%;
    }

    .product__order_button {
        width: 100%;
        height: 54px;
    }

    @media (max-width: 1024px) {
        .products {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 34px 20px;
        }

        .product__order_button {
            height: 44px;
        }
    }
</style>