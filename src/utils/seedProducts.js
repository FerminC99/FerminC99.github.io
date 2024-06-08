import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [{
    id: "qwerty38937e1",
    name: "Camiseta Adidas",
    description: "Esta remera de entrenamiento se ve bien en el gimnasio y en los momentos de descanso con amigos en casa.",
    price: 120,
    stock: 50,
    category: "adidas",
    image:"/image/camiseta2.3.jpg",
},

{
    id: "qwerty1re25rg",
    name: "Camiseta Adidas",
    description: "Esta remera de entrenamiento se ve bien en el gimnasio y en los momentos de descanso con amigos en casa.",
    price: 200,
    stock: 45,
    category: "adidas",
    image:"/image/camiseta4.4.jpg",
},

{
    id: "qwer31grege",
    name: "Camiseta Puma",
    description: " El algodón de los productos PUMA procede de plantaciones que aplican los principios de la agricultura sostenible, como la eficiencia hídrica y la protección de la salud del suelo",
    price: 90,
    stock: 200,
    category: "puma",
    image:"/image/camiseta1.1.jpg",
},
{
    id: "qwer31454",
    name: "Camiseta Puma",
    description: " El algodón de los productos PUMA procede de plantaciones que aplican los principios de la agricultura sostenible, como la eficiencia hídrica y la protección de la salud del suelo",
    price: 190,
    stock: 20,
    category: "puma",
    image:"/image/camiseta6.6.jpg",
},


{
    id: "qwert3vegv736",
    name: "Camiseta Nike",
    description: "Con un diseño clásico e impecable, esta remera de algodón de densidad media cuenta con un estilo más holgado en los hombros, el pecho y el cuerpo para que puedas moverte y usarla encima de otras prendas con facilidad. Los nuevos gráficos de Nike mantienen tu estilo.",
    price: 150,
    stock: 85,
    category: "nike",
    image:"/image/camiseta3.3.jpg",
},

{
    id: "qwert3geh389636",
    name: "Camiseta Nike",
    description: "Con un diseño clásico e impecable, esta remera de algodón de densidad media cuenta con un estilo más holgado en los hombros, el pecho y el cuerpo para que puedas moverte y usarla encima de otras prendas con facilidad. Los nuevos gráficos de Nike mantienen tu estilo.",
    price: 125,
    stock: 65,
    category: "nike",
    image:"/image/camiseta5.5.jpg",
},
]

const seedProducts = () => {
  products.map(({ id, ...rest }) =>{
    addDoc(collection(db, "products"), rest)
  });
  return
}

seedProducts()