<template>
    <div class="footer-contact">
        <AppTitle class="footer-contact__title">
            Контакты
        </AppTitle>
        <ul class="footer-contact__list">
            <li class="footer-contact__item">
                <a
                class="footer-contact__link"
                href="tel:+73532630000"
                >
                    +7(353)263-00-00
                </a>
            </li>
            <li class="footer-contact__item">
                <a
                class="footer-contact__link"
                href="mailto:sales@рублефф.рф"
                >
                    sales@рублефф.рф
                </a>
            </li>
            <li class="footer-contact__item">
                <a
                class="footer-contact__link"
                href=""
                >
                    г. Оренбург, Джанглильдина 10 (Вход со стороны дороги)
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppContactsFooter'
}
</script>

<style lang="scss" scoped>
    @import '@/style/vars';

    .footer-contact {
        text-align: right;
    }

    .footer-contact__title {
        margin-bottom: 20px;
    }

    .footer-contact__list {
        display: flex;
        flex-direction: column;
        row-gap: 11px;
    }

    .footer-contact__link {
        color: #FF0000;

        transition: $transitionTimeDefault;
    }
</style>