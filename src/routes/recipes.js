const { Router } = require("express")
const router = Router()

const generateLikes = () => {
    return Math.floor(Math.random() * 300) + 1
}

const generateUserAssociation = () => {
    return Math.floor(Math.random() * 10) + 1
}

const generatePrice = () => {
    let max = 50
    let min = 9.99
    let randomChance = Math.floor(Math.random() * 10)
    if (randomChance === 0) {
        return 0
    } else {
        let price = Math.random() * (max - min + 1) + min
        return +price.toFixed(2)
    }
}

let recipes = [
    {
        id: 1,
        user_id: generateUserAssociation(),
        name: "Butter Chicken",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. \nIncididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.theendlessmeal.com/wp-content/uploads/2020/05/Easy-Butter-Chicken-3.jpg",
        likes: generateLikes(),
    },
    {
        id: 2,
        user_id: generateUserAssociation(),
        name: "Chicken Tikka Masala",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-tikka-masala-jpg-1526059261.jpg?resize=480:*",
        likes: generateLikes(),
    },
    {
        id: 3,
        user_id: generateUserAssociation(),
        name: "Aloo Vindaloo",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.whiskaffair.com/wp-content/uploads/2020/12/Aloo-Vindaloo-2-1.jpg",
        likes: generateLikes(),
    },
    {
        id: 4,
        user_id: generateUserAssociation(),
        name: "Beast Burger",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.theburn.com/wp-content/uploads/2021/10/Screen-Shot-2021-10-20-at-5.04.56-PM.jpg",
        likes: generateLikes(),
    },
    {
        id: 5,
        user_id: generateUserAssociation(),
        name: "French Fries",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.thespruceeats.com/thmb/yjIQQytfjzaCRZ7tA6oBcXAapJc=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
        likes: generateLikes(),
    },
    {
        id: 6,
        user_id: generateUserAssociation(),
        name: "Infused Dark Ale Trout",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 7,
        user_id: generateUserAssociation(),
        name: "Apple Toffee",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.favfamilyrecipes.com/wp-content/uploads/2018/08/toffee-apples-2.jpg",
        likes: generateLikes(),
    },
    {
        id: 8,
        user_id: generateUserAssociation(),
        name: "Shallow-Fried Stew of Turkey",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 9,
        user_id: generateUserAssociation(),
        name: "Marinated Sweet 'n Sour Goulash",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 10,
        user_id: generateUserAssociation(),
        name: "Coffee and Grapefruit Candy",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 11,
        user_id: generateUserAssociation(),
        name: "Basted Souther-Style Chicken",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 12,
        user_id: generateUserAssociation(),
        name: "Date Genoise",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 13,
        user_id: generateUserAssociation(),
        name: "Baked Ginger Duck",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 14,
        user_id: generateUserAssociation(),
        name: "Kiwi Buns",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 15,
        user_id: generateUserAssociation(),
        name: "Shallow-Fried Cinnamon",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 16,
        user_id: generateUserAssociation(),
        name: "Brined Honey Tortilla",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 17,
        user_id: generateUserAssociation(),
        name: "Basted Rhubarb Pheasant",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 18,
        user_id: generateUserAssociation(),
        name: "Date and Walnut Split",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 19,
        user_id: generateUserAssociation(),
        name: "Strawberry Crispies",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 20,
        user_id: generateUserAssociation(),
        name: "White Wine Candy",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 21,
        user_id: generateUserAssociation(),
        name: "Butter Chicken",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 22,
        user_id: generateUserAssociation(),
        name: "Chicken Tikka Masala",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 23,
        user_id: generateUserAssociation(),
        name: "Aloo Vindaloo",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 24,
        user_id: generateUserAssociation(),
        name: "Beast Burger",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 25,
        user_id: generateUserAssociation(),
        name: "French Fries",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 26,
        user_id: generateUserAssociation(),
        name: "Infused Dark Ale Trout",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg",
        likes: generateLikes(),
    },
    {
        id: 27,
        user_id: generateUserAssociation(),
        name: "Apple Toffee",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://www.favfamilyrecipes.com/wp-content/uploads/2018/08/toffee-apples-2.jpg",
        likes: generateLikes(),
    },
    {
        id: 28,
        user_id: generateUserAssociation(),
        name: "Shallow-Fried Stew of Turkey",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 29,
        user_id: generateUserAssociation(),
        name: "Marinated Sweet 'n Sour Goulash",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 30,
        user_id: generateUserAssociation(),
        name: "Coffee and Grapefruit Candy",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 31,
        user_id: generateUserAssociation(),
        name: "Basted Souther-Style Chicken",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 32,
        user_id: generateUserAssociation(),
        name: "Date Genoise",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 33,
        user_id: generateUserAssociation(),
        name: "Baked Ginger Duck",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 34,
        user_id: generateUserAssociation(),
        name: "Kiwi Buns",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://img.freepik.com/free-photo/fresh-buns-with-kiwi-jam-old-wooden-table_288431-3683.jpg?w=2000",
        likes: generateLikes(),
    },
    {
        id: 35,
        user_id: generateUserAssociation(),
        name: "Shallow-Fried Cinnamon",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://img.freepik.com/free-photo/homemade-waffle-tubes-blue-plate-white-background-with-copy-space_542566-651.jpg?w=2000",
        likes: generateLikes(),
    },
    {
        id: 36,
        user_id: generateUserAssociation(),
        name: "Brined Honey Tortilla",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 37,
        user_id: generateUserAssociation(),
        name: "Basted Rhubarb Pheasant",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 38,
        user_id: generateUserAssociation(),
        name: "Date and Walnut Split",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://jajabakes.com/wp-content/uploads/2019/09/walnut-stuffed-red-dates-3.jpg",
        likes: generateLikes(),
    },
    {
        id: 39,
        user_id: generateUserAssociation(),
        name: "Strawberry Crispies",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://thetoastykitchen.com/wp-content/uploads/2020/01/strawberry-rice-krispies-treats-toasty-kitchen-02.jpg",
        likes: generateLikes(),
    },
    {
        id: 40,
        user_id: generateUserAssociation(),
        name: "White Wine Candy",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 41,
        user_id: generateUserAssociation(),
        name: "Basted Souther-Style Chicken",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 42,
        user_id: generateUserAssociation(),
        name: "Date Genoise",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 43,
        user_id: generateUserAssociation(),
        name: "Baked Ginger Duck",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 44,
        user_id: generateUserAssociation(),
        name: "Kiwi Buns",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://img.freepik.com/free-photo/fresh-buns-with-kiwi-jam-old-wooden-table_288431-3683.jpg?w=2000",
        likes: generateLikes(),
    },
    {
        id: 45,
        user_id: generateUserAssociation(),
        name: "Shallow-Fried Cinnamon",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 46,
        user_id: generateUserAssociation(),
        name: "Brined Honey Tortilla",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 47,
        user_id: generateUserAssociation(),
        name: "Basted Rhubarb Pheasant",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 48,
        user_id: generateUserAssociation(),
        name: "Date and Walnut Split",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
    {
        id: 49,
        user_id: generateUserAssociation(),
        name: "Strawberry Crispies",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://thetoastykitchen.com/wp-content/uploads/2020/01/strawberry-rice-krispies-treats-toasty-kitchen-02.jpg",
        likes: generateLikes(),
    },
    {
        id: 50,
        user_id: generateUserAssociation(),
        name: "White Wine Candy",
        price: generatePrice(),
        ingredients:
            "Eiusmod ex ad adipisicing quis non in voluptate.\n - Aliquip nostrud aliquip elit ea qui dolore. \n - Consequat sint commodo id.\n - Irure nulla laboris nulla elit. \n - Tempor aliquip non dolore fugiat aliqua cupidatat culpa enim aliqua. ",
        details:
            "Excepteur incididunt nostrud dolor nostrud sunt esse. Incididunt elit deserunt aute labore eiusmod reprehenderit magna ex consequat nostrud ea aliquip ipsum et velit.",
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",
        likes: generateLikes(),
    },
]

router.get("/all", (req, res, next) => {
    res.json(recipes)
})

module.exports = router
