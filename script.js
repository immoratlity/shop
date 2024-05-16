const products = document.querySelector(".products");
const request = new XMLHttpRequest();
request.open("GET", "https://fakestoreapi.com/products");
request.send();

request.addEventListener("load", () => {
  const data = JSON.parse(request.responseText);
  console.log(data);
  data.forEach((c) => {
    products.innerHTML += `
              <div class="lg:w-[250px] md:w-1/2 p-4 w-full hover:translate-y-[-10px] transition hover:shadow-2xl bg-white">
        <a class="block relative rounded overflow-hidden">
          <img alt="ecommerce" class="h-[200px] w-full hover:shadow-2xl hover:scale-75 transition translate-y-[-5px]" src="${c.image}">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 ">${c.category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">${c.price}</p>
        </div>
      </div>
      `;
  });
});

// // Предположим, что у вас есть массив объектов с товарами
// var product = [
//   { id: 1, name: "Товар 1", price: 100 },
//   { id: 2, name: "Товар 2", price: 200 },
//   { id: 3, name: "Товар 3", price: 300 }
// ];

// // Функция для сохранения товара
// function saveProduct(productId) {
//   // Находим товар по его идентификатору
//   var product = products.find(function(prod) {
//       return prod.id === productId;
//   });

//   // Проверяем, был ли найден товар
//   if (product) {
//       // Сериализуем объект товара в строку JSON
//       var productJSON = JSON.stringify(product);
//       // Сохраняем товар в localStorage под ключом "savedProduct"
//       localStorage.setItem("savedProduct", productJSON);
//       alert("Товар сохранен!");
//   } else {
//       alert("Товар не найден!");
//   }
// }

// // Функция для обработки нажатия кнопки "Сохранить"
// function handleSaveButtonClick(productId) {
//   saveProduct(productId);
// }

// // Пример создания кнопок "Сохранить" для каждого товара в магазине
// products.forEach(function(product) {
//   var button = document.createElement("button");
//   button.textContent = "Сохранить";
//   // Назначаем обработчик события для кнопки
//   button.addEventListener("click", function() {
//       handleSaveButtonClick(product.id);
//   });
//   // Вставляем кнопку после названия товара (можно настраивать в зависимости от разметки магазина)
//   var productNameElement = document.getElementById("product-" + product.id + "-name");
//   productNameElement.parentNode.insertBefore(button, productNameElement.nextSibling);
// });

