<template>
    <div class="mainpage">
        <div class="mainpage__header">тестовое задание</div>
        <a href="/catalog/" class="mainpage__btn">В каталог</a>
    </div>
</template>

<style lang="scss" scoped>
    .mainpage {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 80px);
        justify-content: center;
        gap: 40px;

        &__header {
            font-weight: 500;
            font-size: 64px;
            line-height: 110%;
            text-transform: uppercase;
            color: #000;
        }

        &__btn {
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 24px;
            gap: 40px;
            background: #FF0000;
            color: #fff;
            text-decoration: none;
            width: fit-content;
            display: flex;
        }
    }
</style>