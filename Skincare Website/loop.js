const skinTypes = [
    {
      name: "Normal Skin",
      description: "Stick to the basics: cleanse, exfoliate, hydrate, and protect your skin. If you have concerns like aging, wrinkles, or dark spots, tailor your routine to address those specific needs."
    },
    {
      name: "Oily Skin",
      description: "Essentials: Use oil-free and non-comedogenic products. Cleanse with foaming or gel-based cleansers. Incorporate toners with salicylic acid to reduce oiliness. Look for lightweight, oil-free moisturizers and sunscreens."
    },
    {
      name: "Dry Skin",
      description: "Choose hydrating cleansers (cream or oil-based). Use hydrating toners with hyaluronic acid. Incorporate rich serums and heavy moisturizers to lock in moisture. Opt for moisturizing sunscreens."
    },
    {
      name: "Sensitive Skin",
      description: "Use gentle, fragrance-free products. Cleanse with non-irritating formulas. Include soothing ingredients (e.g., aloe vera, chamomile). Select mineral-based sunscreens to avoid irritation."
    },
    {
      name: "Acne Skin",
      description: "Use non-comedogenic and oil-free products. Incorporate exfoliating treatments with salicylic acid or benzoyl peroxide. Use lightweight moisturizers that won't clog pores. Apply sunscreens that are non-comedogenic."
    },
    {
      name: "Combined Skin",
      description: "Use balancing cleansers. Apply lightweight moisturizers and hydrating toners. Customize your routine: target oily areas with mattifying products and hydrate dry areas."
    }
  ];
  
  const skinTypesContainer = document.getElementById("skin-types");
  skinTypes.forEach(skinType => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const heading = document.createElement("h2");
    heading.textContent = skinType.name;
    card.appendChild(heading);
  
    const paragraph = document.createElement("p");
    paragraph.textContent = skinType.description;
    card.appendChild(paragraph);
  
    skinTypesContainer.appendChild(card);
  });
  