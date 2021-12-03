import { DataType } from '@shopify/shopify-api';
import Axios from 'axios'

const productApi = "admin/api/2021-01";
export async function createProduct(client, price) {
    const params = {
        "product": {
            "title":"Custom product",
            "body_html":"Custom product",
            "variants": [{"option1":"First","price":`${price.toFixed(2)}`,"sku":"123"}]
        }
    };

    // const { shop, accessToken } = ctx.sesionFromToken;
    
    // const axios = Axios.create({
    //     baseURL: `https://${shop}/${productApi}`,
    //     headers: {
    //         "Content-Type": "application/json",
    //         "X-Shopify-Access-Token": accessToken,
    //     },

    // });

    // let { data } = await axios.post("/products.json", params)

    const data = await client.post({
        path: 'products',
        data: params,
        type: DataType.JSON,
      });

    return data;
}