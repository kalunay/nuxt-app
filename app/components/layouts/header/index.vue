<template>
    <div class="header">
        <div class="header__logo"></div>
        <div class="header__menu">
            <ul>
                <li><a href="#">Мужчинам</a></li>
                <li><a href="#">Женщинам</a></li>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">О нас</a></li>
            </ul>
        </div>
        <div class="header__burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;

        &__logo {
            display: block;
            width: 42px;
            height: 42px;
            background: #FF0000;
        }

        &__menu {
            background: #F5F5F5;
            padding: 10px 24px;
            width: fit-content;
            display: block;

            @media (max-width: 768px) { display: none; }

            & ul {
                padding: 0;
                margin: 0;
                display: flex;
                list-style: none;
                gap: 24px;

                & a {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #000000;
                    text-decoration: none;
                    transition: all .24s ease;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }

        &__burger {
            background: #F5F5F5;
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: fit-content;
            padding: 12px 8px;
            opacity: 0;

            @media (max-width: 768px) { opacity: 1; }

            & span {
                display: block;
                width: 24px;
                height: 2px;
                background: #000000;
            }
        }
    }
</style>