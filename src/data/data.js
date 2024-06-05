const products = [
    {
        id: "qwerty1",
        name: "Camiseta Adidas",
        description: "Esta remera de entrenamiento se ve bien en el gimnasio y en los momentos de descanso con amigos en casa.",
        price: 120,
        stock: 5,
        category: "adidas",
        image:"/image/camiseta2.3.jpg",
    },

    {
        id: "qwer31",
        name: "Camiseta Puma",
        description: " El algodón de los productos PUMA procede de plantaciones que aplican los principios de la agricultura sostenible, como la eficiencia hídrica y la protección de la salud del suelo",
        price: 90,
        stock: 2,
        category: "puma",
        image:"/image/camiseta1.1.jpg",
    },

    {
        id: "qwert36",
        name: "Camiseta Nike",
        description: "Con un diseño clásico e impecable, esta remera de algodón de densidad media cuenta con un estilo más holgado en los hombros, el pecho y el cuerpo para que puedas moverte y usarla encima de otras prendas con facilidad. Los nuevos gráficos de Nike mantienen tu estilo.",
        price: 150,
        stock: 8,
        category: "nike",
        image:"/image/camiseta3.3.jpg",
    },

 ]

 const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products); // Quita los corchetes alrededor de 'products'
        }, 2000);
    });
};

export default getProducts;