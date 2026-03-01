<script setup lang="ts">

    import { ref, computed, onMounted } from 'vue'
    import type { IProducts } from '@/interfaces'
    import { useCatalogStore } from '@/stores/catalog';
    const catalog = useCatalogStore();
    await catalog.setProducts();

    const products = ref<IProducts[]>([]);
    const currentPage = computed(() => catalog.getCurrentPage);
    const totalPages = computed(() => catalog.getTotalPages);
    const isLoading = ref<boolean>(false);
    const isError = ref<boolean>(false);

    const loadMore = async (page: number) : Promise<void> => {
        isLoading.value = true
        try {
            await catalog.setProducts(page + 1, 16);
            const listProducts: Array<IProducts> = await catalog.getProducts;
            products.value = [...products.value, ...listProducts];
            isLoading.value = false;
            isError.value = false;
        } catch(e) {
            isError.value = true;
        }
    }

    const listProducts: Array<IProducts> = await catalog.getProducts;
    products.value = [...listProducts];

</script>

<template>
    <h1>каталог</h1>

    <div class="products">
        <div class="products__wrap">
            <CatalogItem 
                v-for="product in products" 
                :key="product.id" 
                :product="product"
            /> 
        </div>
        <div v-if="isError" class="products__error">Произошла ошибка, попробуйте позже</div>
        <div
            v-if="currentPage < totalPages"
            @click="loadMore(currentPage)"
            class="products__btn"
            :class="{'products__btn--noborder': isLoading}"
        >
            <span v-if="isError">Повторить</span>
            <span v-else-if="!isLoading">Показать еще</span>
            <span v-else>Загрузка...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    font-weight: 500;
    font-size: 42px;
    line-height: 110%;
    text-transform: uppercase;
    text-align: center;
    margin: 40px auto;
}

.products {

    margin-bottom: 48px;

    &__wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
        margin: 48px auto;

        @media (max-width: 768px) { 
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin: 16px auto;
        }
    }

    &__btn {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        vertical-align: bottom;
        color: #000000;
        border: 1px solid #000000;
        padding: 10px 24px;
        width: fit-content;
        margin: auto;
        cursor: pointer;

        &--noborder {
            border: none;
        }
    }

    &__error {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        text-align: center;
        margin-bottom: 32px;
    }
}
</style>