const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const productList = document.getElementById("ingredients");
const items = ingredients.map((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    return listItem;
    // productList.append(listItem);
});
productList.append(...items);
