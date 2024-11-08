const essentialsData = [
    {
      type: "Normal Skin",
      products: [
        "Cleanser: SKIN1004 Madagascar Centella Cleansing Foam",
        "Toner: SKIN1004 Madagascar Centella Toning Toner",
        "Serum: SKIN1004 Madagascar Centella Ampoule",
        "Moisturizer: SKIN1004 Madagascar Centella Cream",
        "Sunscreen: SKIN1004 Madagascar Centella Sun Cream SPF 50+"
      ]
    },
    {
      type: "Oily Skin",
      products: [
        "Cleanser: SKIN1004 Madagascar Centella Cleansing Foam",
        "Toner: SKIN1004 Madagascar Centella Toning Toner",
        "Serum: SKIN1004 Madagascar Centella Ampoule",
        "Moisturizer: SKIN1004 Madagascar Centella Cream",
        "Sunscreen: SKIN1004 Madagascar Centella Sun Cream SPF 50+"
      ]
    },
    {
      type: "Dry Skin",
      products: [
        "Cleanser: SKIN1004 Madagascar Centella Cleansing Foam",
        "Toner: SKIN1004 Madagascar Centella Toning Toner",
        "Serum: SKIN1004 Madagascar Centella Ampoule",
        "Moisturizer: SKIN1004 Madagascar Centella Cream",
        "Sunscreen: SKIN1004 Madagascar Centella Sun Cream SPF 50+"
      ]
    },
    {
      type: "Sensitive Skin",
      products: [
        "Cleanser: SKIN1004 Madagascar Centella Cleansing Foam",
        "Toner: SKIN1004 Madagascar Centella Toning Toner",
        "Serum: SKIN1004 Madagascar Centella Ampoule",
        "Moisturizer: SKIN1004 Madagascar Centella Cream",
        "Sunscreen: SKIN1004 Madagascar Centella Sun Cream SPF 50+"
      ]
    },
    {
      type: "Acne Skin",
      products: [
        "Cleanser: SKIN1004 Madagascar Centella Cleansing Foam",
        "Toner: SKIN1004 Madagascar Centella Toning Toner",
        "Serum: SKIN1004 Madagascar Centella Ampoule",
        "Moisturizer: SKIN1004 Madagascar Centella Cream",
        "Sunscreen: SKIN1004 Madagascar Centella Sun Cream SPF 50+"
      ]
    },
    {
      type: "Combination Skin",
      products: [
        "Cleanser: SKIN1004 Madagascar Centella Cleansing Foam",
        "Toner: SKIN1004 Madagascar Centella Toning Toner",
        "Serum: SKIN1004 Madagascar Centella Ampoule",
        "Moisturizer: SKIN1004 Madagascar Centella Cream",
        "Sunscreen: SKIN1004 Madagascar Centella Sun Cream SPF 50+"
      ]
    }
  ];
  
  function generateEssentialsContent() {
    const essentialsContainer = document.getElementById("essentials");
  
    essentialsData.forEach(item => {
      const skinTypeDiv = document.createElement("div");
      skinTypeDiv.classList.add("skin-type");
  
      const button = document.createElement("button");
      button.textContent = item.type;
      button.classList.add("skin-type-button");
      skinTypeDiv.appendChild(button);
  
      const productList = document.createElement("ul");
      productList.classList.add("product-list", "hidden");
      item.products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = product;
        productList.appendChild(listItem);
      });
      skinTypeDiv.appendChild(productList);

      button.addEventListener("click", () => {
        productList.classList.toggle("hidden");
        productList.style.maxHeight = productList.classList.contains("hidden") ? "0" : productList.scrollHeight + "px";
        localStorage.setItem("selectedSkinType", item.type);
      });
  
      essentialsContainer.appendChild(skinTypeDiv);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    generateEssentialsContent();
  
    const savedSkinType = localStorage.getItem("selectedSkinType");
    if (savedSkinType) {
      const savedButton = Array.from(document.querySelectorAll(".skin-type-button")).find(button => button.textContent === savedSkinType);
      if (savedButton) {
        savedButton.click();
      }
    }
  });
  