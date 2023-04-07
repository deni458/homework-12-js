async function getPoducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        const products = data.products;

        for (const product of products) {
            if (product.rating > 4.5) {
                console.log(product.title + " - rating: " + product.rating);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

getPoducts();