const products = [
    {
        id:"1",
        name: "Apple Watch Series 8",
        price: 500,
        category: "reloj",
        stock: 5,
        img: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v2392422211455026411/products/100000254.00-apple-watch-series-3-38-mm-pulsera-deportiva-negra-mtf02cl-a.jpg&quality=0.8&outputFormat=JPEG",
    },
    {
        id:"2",
        name: "MacBook Pro M2",
        price: 2600,
        category: "computadora",
        stock: 2,
        img: "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8974895245429162860/products/100002271.00-apple-macbook-pro-m2-2022-256gb-gris-espacial-mneh3ci-a.jpg&quality=0.8&outputFormat=JPEG",
    },
    {
        id:"3",
        name: "iPhone 14 Pro",
        price: 1200,
        category: "celular",
        stock: 10,
        img: "https://f.fcdn.app/imgs/7b96ce/electroventas.com.uy/elecuy/2907/webp/catalogo/IPHONE12P-256GR1/2000-2000/celular-iphone-12-pro-256gb-refurbished-gris.jpg",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}