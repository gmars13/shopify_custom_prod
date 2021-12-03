import { DataType } from "@shopify/shopify-api";
import Axios from 'axios'

const themeApi = "admin/api/2021-01";
export async function getAllThemes(ctx){
    // const data = await ctx.client.get({
    //     path: 'themes/128779845867/assets',
    //     query: {"asset":{"key":"templates\/customproductform.liquid"}},
    // });

    // return data;
    const { shop, accessToken } = ctx.sesionFromToken;
    const axios = Axios.create({
        baseURL: `https://${shop}/${themeApi}`,
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": accessToken,
        },
    });

    const { data } = await axios.get(
        `/themes/128779845867/assets.json?asset[key]=snippets/customproductform.liquid`
    );

    return data
}