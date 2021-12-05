import Router from "koa-router";
import { getAllThemes } from '../controllers/themes_controllers'
import { createProduct } from "../controllers/products_controller";
import Shopify from "@shopify/shopify-api";

const router = new Router();

router.get('/themes', async (ctx) => {
    const result = await getAllThemes(ctx)

    ctx.body = result;
})


// router.get('/options', async (ctx) => {
//     console.log(ctx.req)
//     console.log(ctx.query)
//     var defaultFoamPrice = {
//         "Soft" : 0.6,
//         "Medium": 0.8,
//         "Firm": 1.4,
//         "Cover": 0
//     }

//     var tiesCount = {
//         "none" : 0,
//         "side" : 2,
//         "standard" : 2,
//         "double" : 4
//     }

//     var cushionSizePrice = {
//         "Small" : {
//             "welting" : {
//             "single" : 18,
//             "double" : 24,
//             "none" : 0,
//             },
//             "productType" : 1.85
//         },
//         "Medium" : {
//             "welting" : {
//             "single" : 28,
//             "double" : 35,
//             "none" : 0,
//             },
//             "productType" : 2.00
//         },
//         "Large" : {
//             "welting" : {
//             "single" : 36,
//             "double" : 48,
//             "none" : 0,
//             },
//             "productType" : 2.2
//         } 
//     }
//     let { query } = ctx
//     var cushionSize;
//     var foamType = query.fill
//     var defaultFabricPrice = 29.95;
//     var productTypePrice = 2;
//     var pricePerTie = 4;
//     var volume = 0;
//     var surfaceArea = 0;
//     var foamPrice = 0;
//     var fabricPrice = 0;
//     var weltingPrice = 0;
//     var tiePrice = 0;
//     let thickness = parseInt(query.thickness);
//     let depth = parseInt(query.depth);
//     let width = parseInt(query.width);
//     let current_volume = thickness * depth * width;
//     let dimensionsMax = Math.max(thickness, depth, width)
//     let newPrice;

//     cushionSize = dimensionsMax <= 25 ? "Small" : dimensionsMax <= 70 ? "Medium" : "Large";
//     surfaceArea = ((thickness * depth) + (thickness * width) + (depth * width)) * 2;
//     volume = current_volume;

//     fabricPrice = Math.ceil(surfaceArea / 1944) * 1.2 * defaultFabricPrice;
//     foamPrice = volume/144 * defaultFoamPrice[`${foamType}`];
//     productTypePrice = cushionSizePrice[`${cushionSize}`].productType
//     tiePrice = tiesCount[`${query.ties}`] * pricePerTie;
//     weltingPrice = cushionSizePrice[`${cushionSize}`].welting[`${query.welting}`];
//     newPrice = (foamPrice + fabricPrice + weltingPrice + tiePrice) * productTypePrice;

//     console.log(newPrice)
//     let data = await createProduct(ctx.myClient, newPrice)

//     ctx.body = data;
// })
export default router;
