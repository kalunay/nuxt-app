import { defineStore } from 'pinia';
import type { IProducts, IData } from '@/interfaces'

interface ProductsState {
    products: Array<IProducts>,
    totalPages: number,
    currentPage: number
}

export const useCatalogStore = defineStore('catalog', {
    state: (): ProductsState => ({
        products: [],
        totalPages: 0,
        currentPage: 0
    }),
    getters: {
        getProducts: (state) => state.products,
        getTotalPages: (state) => state.totalPages,
        getCurrentPage: (state) => state.currentPage
    },
    actions: {
      async setProducts(page:number = 1, limit:number = 16) {
        const { fetchData } = useApi();
        const data = await fetchData<IData>(`products?page=${page}}&limit=${limit}`);

        this.products = data.products;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
      }
    },
  })