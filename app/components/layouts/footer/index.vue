<template>
    <div class="footer">
        <div class="footer__block">
            <div class="footer__header">Каталог</div>
            <a href="#">Все бренды</a>
            <a href="#">Nike</a>
            <a href="#">Adidas</a>
            <a href="#">Puma</a>
            <a href="#">New Balance</a>
        </div>
        <div class="footer__block">
            <div class="footer__header">Помощь</div>
            <a href="#">Доставка</a>
            <a href="#">Заказ и оплата</a>
            <a href="#">Обмен и Возврат</a>
            <a href="#">F. A. Q.</a>
        </div>
        <div class="footer__block">
            <div class="footer__header">Информация</div>
            <a href="#">Преимущества</a>
            <a href="#">Гарантия и безопасность</a>
            <a href="#">Индивидуальный заказ</a>
            <a href="#">Акции</a>
        </div>
        <div class="footer__block">
            <div class="footer__header">Компания</div>
            <a href="#">О нас</a>
            <a href="#">Блог</a>
            <a href="#">Отзывы</a>
            <a href="#">Контакты</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        border-top-width: 1px;
        padding-top: 100px;
        padding-right: 60px;
        padding-bottom: 100px;
        padding-left: 60px;
        gap: 80px;
        background: #000000;
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        @media (max-width: 768px) { 
            grid-template-columns: 1fr; 
            padding-right: 20px;
            padding-left: 20px;
        }

        &__block {
            display: flex;
            flex-direction: column;
            gap: 16px;

            & a {
                font-weight: 400;
                font-size: 14px;
                line-height: 140%;
                color: #fff;
                text-decoration: none;
                transition: all .24s ease;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &__header {
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #6F6F6F;
        }
    }
</style>