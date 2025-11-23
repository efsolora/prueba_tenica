import http from 'k6/http';
import { check, sleep } from 'k6';

// Generador de producto dinámico
function generateProduct() {
  const rnd = Math.floor(Math.random() * 100000);
  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

  return {
    title: `Producto_${rnd}`,
    price: (Math.random() * 200 + 10).toFixed(2),
    description: `Descripción random ${rnd}`,
    image: `https://picsum.photos/200?random=${rnd}`,
    category: categories[Math.floor(Math.random() * categories.length)]
  };
}

export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '30s', target: 250 },
    { duration: '30s', target: 400 },
    { duration: '30s', target: 550 },
    { duration: '30s', target: 700 },
    { duration: '30s', target: 850 },
    { duration: '30s', target: 1000 },
  ],
};

export default function () {
  const baseUrl = 'https://fakestoreapi.com';

  // GET → listar productos
  const getRes = http.get(`${baseUrl}/products`);
  check(getRes, { "GET 200": (r) => r.status === 200 });

  // POST → crear producto dinámico
  const payload = JSON.stringify(generateProduct());

  const postRes = http.post(`${baseUrl}/products`, payload, {
    headers: { "Content-Type": "application/json" }
  });

  check(postRes, { "POST 200/201": (r) => r.status === 200 || r.status === 201 });

  sleep(1);
}
