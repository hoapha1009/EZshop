import axiosClient from './axiosClient';

const productAPI = {
    async getAll(params) {
        const newParams = { ...params };
        newParams._start =
            !newParams._page || newParams._page <= 1 ? 0 : newParams._page - 1 / (newParams._limit || 50);

        // Remove un-needed keys
        delete newParams._page;

        // fetch product list + count
        const productList = await axiosClient.get('/products', { params: newParams });
        const count = await axiosClient.get('/products', { params: newParams });

        // Build response + return
        return {
            data: productList,
            pagination: {
                page: params._page,
                limit: params._limit,
                total: count,
            },
        };
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/products';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default productAPI;
