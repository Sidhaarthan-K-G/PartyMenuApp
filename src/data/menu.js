const menuData = [
  {
    id: 1,
    name: "Paneer Tikka",
    description:
      "Grilled cottage cheese cubes marinated with Indian spices.",
    category: "Starter",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
    ingredients: [
      {
        name: "Paneer",
        quantity: "200g",
      },
      {
        name: "Yogurt",
        quantity: "100ml",
      },
      {
        name: "Capsicum",
        quantity: "50g",
      },
    ],
  },

  {
    id: 2,
    name: "Chicken Wings",
    description:
      "Spicy and crispy chicken wings served with dip.",
    category: "Starter",
    type: "nonveg",
    imageUrl:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
    ingredients: [
      {
        name: "Chicken",
        quantity: "300g",
      },
      {
        name: "Garlic Sauce",
        quantity: "50ml",
      },
    ],
  },

  {
    id: 3,
    name: "Spring Rolls",
    description:
      "Crispy vegetable spring rolls served with sweet chili sauce.",
    category: "Starter",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    ingredients: [
      {
        name: "Cabbage",
        quantity: "100g",
      },
      {
        name: "Carrot",
        quantity: "50g",
      },
    ],
  },

  {
    id: 4,
    name: "Fish Fingers",
    description:
      "Golden fried fish fingers with tartar sauce.",
    category: "Starter",
    type: "nonveg",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
    ingredients: [
      {
        name: "Fish",
        quantity: "250g",
      },
      {
        name: "Bread Crumbs",
        quantity: "80g",
      },
    ],
  },

  {
    id: 5,
    name: "Veg Biryani",
    description:
      "Aromatic basmati rice cooked with fresh vegetables.",
    category: "Main Course",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
    ingredients: [
      {
        name: "Rice",
        quantity: "500g",
      },
      {
        name: "Vegetables",
        quantity: "250g",
      },
    ],
  },

  {
    id: 6,
    name: "Butter Chicken",
    description:
      "Creamy tomato-based chicken curry with butter.",
    category: "Main Course",
    type: "nonveg",
    imageUrl:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    ingredients: [
      {
        name: "Chicken",
        quantity: "400g",
      },
      {
        name: "Butter",
        quantity: "100g",
      },
    ],
  },

  {
    id: 7,
    name: "Paneer Butter Masala",
    description:
      "Soft paneer cubes cooked in rich creamy gravy.",
    category: "Main Course",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    ingredients: [
      {
        name: "Paneer",
        quantity: "250g",
      },
      {
        name: "Cream",
        quantity: "100ml",
      },
    ],
  },

  {
    id: 8,
    name: "Mutton Curry",
    description:
      "Slow-cooked spicy mutton curry with Indian spices.",
    category: "Main Course",
    type: "nonveg",
    imageUrl:
      "https://images.unsplash.com/photo-1604908176997-4311f89d4e28",
    ingredients: [
      {
        name: "Mutton",
        quantity: "500g",
      },
      {
        name: "Spices",
        quantity: "40g",
      },
    ],
  },

  {
    id: 9,
    name: "Chocolate Brownie",
    description:
      "Rich chocolate brownie served with chocolate syrup.",
    category: "Dessert",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    ingredients: [
      {
        name: "Chocolate",
        quantity: "150g",
      },
      {
        name: "Flour",
        quantity: "100g",
      },
    ],
  },

  {
    id: 10,
    name: "Ice Cream Sundae",
    description:
      "Vanilla ice cream topped with nuts and syrup.",
    category: "Dessert",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    ingredients: [
      {
        name: "Ice Cream",
        quantity: "2 scoops",
      },
      {
        name: "Chocolate Syrup",
        quantity: "40ml",
      },
    ],
  },

  {
    id: 11,
    name: "Cheesecake",
    description:
      "Creamy cheesecake with strawberry topping.",
    category: "Dessert",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    ingredients: [
      {
        name: "Cream Cheese",
        quantity: "200g",
      },
      {
        name: "Strawberries",
        quantity: "50g",
      },
    ],
  },

  {
    id: 12,
    name: "Gulab Jamun",
    description:
      "Soft milk-solid dumplings soaked in sugar syrup.",
    category: "Dessert",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa7d4f",
    ingredients: [
      {
        name: "Milk Powder",
        quantity: "150g",
      },
      {
        name: "Sugar Syrup",
        quantity: "200ml",
      },
    ],
  },

  {
    id: 13,
    name: "French Fries",
    description:
      "Crispy golden potato fries with seasoning.",
    category: "Sides",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    ingredients: [
      {
        name: "Potatoes",
        quantity: "300g",
      },
      {
        name: "Salt",
        quantity: "5g",
      },
    ],
  },

  {
    id: 14,
    name: "Garlic Bread",
    description:
      "Toasted bread with garlic butter and herbs.",
    category: "Sides",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c",
    ingredients: [
      {
        name: "Bread",
        quantity: "4 slices",
      },
      {
        name: "Garlic Butter",
        quantity: "50g",
      },
    ],
  },

  {
    id: 15,
    name: "Mashed Potatoes",
    description:
      "Creamy mashed potatoes with butter and herbs.",
    category: "Sides",
    type: "veg",
    imageUrl:
      "https://images.unsplash.com/photo-1608500218808-33595f6c3c3f",
    ingredients: [
      {
        name: "Potatoes",
        quantity: "400g",
      },
      {
        name: "Butter",
        quantity: "60g",
      },
    ],
  },

  {
    id: 16,
    name: "Chicken Nuggets",
    description:
      "Crispy chicken nuggets served with ketchup.",
    category: "Sides",
    type: "nonveg",
    imageUrl:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    ingredients: [
      {
        name: "Chicken",
        quantity: "250g",
      },
      {
        name: "Bread Crumbs",
        quantity: "80g",
      },
    ],
  },
];

export default menuData;