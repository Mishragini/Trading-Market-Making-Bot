import { DepthManager } from "./DepthManager";

const solInrMarket=new DepthManager("B-SOL_INR");

const usdtInrMarket=new DepthManager("B-USDT_INR");

const solUsdtMarket=new DepthManager("B-SOL_USDT");

setInterval(()=>{
    console.log(solInrMarket.getRelevantDepth());
    console.log(usdtInrMarket.getRelevantDepth());
    console.log(solUsdtMarket.getRelevantDepth());

},2000)