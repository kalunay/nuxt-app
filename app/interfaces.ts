export interface IProducts {
    id: number,
    name: string,
    price: number,
    image: string
}

export interface IData {
    total: number,
    totalPages: number,
    currentPage: number,
    limit: number,
    products: IProducts[]
}