const pricingListWeb = [
    {
        name: "Pricing.w-1-t",
        description: "Pricing.w-1-d",
        pricing: 3000,
        type:1,
    },
    {
        name: "Pricing.w-2-t",
        description: "Pricing.w-2-d",
        pricing: 150,
        type:1,
    },
    {
        name: "Pricing.w-3-t",
        description: "Pricing.w-3-d",
        pricing: 2000,
        type:1,
    },
    {
        name: "Pricing.w-4-t",
        description: "Pricing.w-4-d",
        pricing: 1000,
        type:1,
    },
    {
        name: "Pricing.w-5-t",
        description: "Pricing.w-5-d",
        pricing: 2000,
        type:1,
    },
    {
        name: "Pricing.w-6-t",
        description: "Pricing.w-6-d",
        pricing: 5000,
        type:1,
    },
    {
        name: "Pricing.w-7-t",
        description: "Pricing.w-7-d",
        pricing: 10000,
        type:1,
    },
    {
        name: "Pricing.w-8-t",
        description: "Pricing.w-8-d",
        pricing: 5000,
        type:1,
    },
    {
        name: "Pricing.w-9-t",
        description: "Pricing.w-9-d",
        pricing: 1200,
        type:1,
    }
]


const pricingListAndroid = [
    {
        name: "Pricing.a-1-t",
        description: "Pricing.a-1-d",
        pricing: 1500,
        type:2,
    },
]

const pricingListIOS = [
    {
        name: "Pricing.i-1-t",
        description: "Pricing.i-1-d",
        pricing: 2800,
        type:3,
    },
]

export function getItems(type) {
    if (type === 'web') {
        return pricingListWeb
    }
    else if(type === "android"){
        return pricingListAndroid
    }
    else if(type === "ios"){
        return pricingListIOS
    }
}
