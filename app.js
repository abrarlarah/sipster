// Sipster Digital Menu Database & Logic

const MENU_ITEMS = [
  // --- Fruit Salads ---
  { name: "Fruit Salad with Honey Topping", category: "fruit-salads", prices: { R: 120, M: 230, L: 380 }, tags: ["Healthy", "Sweet"] },
  { name: "Fruit Salad with Fruit Cream", category: "fruit-salads", prices: { R: 200, M: 320, L: 450 }, tags: ["Sweet", "Creamy"] },
  { name: "Fruit Salad with Softy", category: "fruit-salads", prices: { R: 190, M: 320, L: 500 }, tags: ["Sweet", "Cool"] },
  { name: "Fruit Salad with Ice-Cream", category: "fruit-salads", prices: { R: 200, M: 330, L: 530 }, tags: ["Sweet", "Cool"] },
  { name: "Fruit Salad with Tender Coconut", category: "fruit-salads", prices: { R: 250, M: 370, L: 630 }, tags: ["Healthy", "Fresh"] },
  { name: "Fruit Salad with Nuts + Ice-Cream", category: "fruit-salads", prices: { R: 290, M: 460, L: 710 }, tags: ["Nuts", "Sweet"] },
  { name: "Fruit Salad with Nuts", category: "fruit-salads", prices: { R: 240, M: 400, L: 580 }, tags: ["Nuts", "Healthy"] },
  { name: "Fruit Salad with Cream + Nuts", category: "fruit-salads", prices: { R: 290, M: 460, L: 720 }, tags: ["Nuts", "Creamy"] },
  { name: "Fruit Salad with Softy + Nuts", category: "fruit-salads", prices: { R: 280, M: 450, L: 720 }, tags: ["Nuts", "Sweet"] },
  { name: "Dry Fruit Salad", category: "fruit-salads", prices: { Standard: 750 }, tags: ["Nuts", "Rich"] },
  { name: "Mix Fruit Cream", category: "fruit-salads", prices: { Standard: 200 }, tags: ["Sweet", "Creamy"] },
  { name: "Fruit Salad with Blended Dry Fruit", category: "fruit-salads", prices: { R: 490, M: 690, L: 999 }, tags: ["Nuts", "Premium"] },
  { name: "Fruit Salad with Yogurt", category: "fruit-salads", prices: { R: 290, M: 490, L: 740 }, tags: ["Healthy", "Yogurt"] },
  { name: "Sipster Special Fruit Salad", category: "fruit-salads", prices: { Standard: 900 }, tags: ["Signature", "Nuts", "Premium"] },

  // --- Vegetable Salads ---
  { name: "Veg Salad (Plain)", category: "vegetable-salads", prices: { R: 140, M: 340 }, tags: ["Healthy", "Vegan"] },
  { name: "Veg Salad with Kashmiri Walnut", category: "vegetable-salads", prices: { R: 290, M: 640 }, tags: ["Healthy", "Nuts"] },
  { name: "Veg Salad with Yogurt", category: "vegetable-salads", prices: { R: 290, M: 600 }, tags: ["Healthy", "Yogurt"] },
  { name: "Veg Salad with Nuts", category: "vegetable-salads", prices: { R: 250, M: 540 }, tags: ["Healthy", "Nuts"] },
  { name: "Russian Salad", category: "vegetable-salads", prices: { Standard: 190 }, tags: ["Creamy"] },
  { name: "Cucumber Carrot Yogurt Salad", category: "vegetable-salads", prices: { R: 180, M: 400 }, tags: ["Healthy", "Yogurt", "Cool"] },

  // --- Fresh Juices ---
  { name: "Peach Juice", category: "fresh-juices", prices: { M: 210, L: 340 }, tags: ["Fresh", "Fruit"] },
  { name: "Grape Fruit Twist", category: "fresh-juices", prices: { M: 480, L: 730 }, tags: ["Fresh", "Citrus"] },
  { name: "Avocado Juice", category: "fresh-juices", prices: { M: 250, L: 410 }, tags: ["Creamy", "Healthy"] },
  { name: "Cranberry Juice", category: "fresh-juices", prices: { M: 450, L: 720 }, tags: ["Fresh", "Berry"] },
  { name: "Strawberry Juice", category: "fresh-juices", prices: { M: 180, L: 290 }, tags: ["Fresh", "Berry"] },
  { name: "Mosumbi Pineapple Juice", category: "fresh-juices", prices: { M: 200, L: 320 }, tags: ["Citrus", "Fruit"] },
  { name: "Guava Kiwi Juice", category: "fresh-juices", prices: { M: 240, L: 390 }, tags: ["Fruit", "Exotic"] },
  { name: "Raspberry Juice", category: "fresh-juices", prices: { M: 450, L: 840 }, tags: ["Fresh", "Berry"] },
  { name: "Strawberry Kiwi Juice", category: "fresh-juices", prices: { M: 300, L: 400 }, tags: ["Fresh", "Berry"] },
  { name: "Mango Pineapple Mint Juice", category: "fresh-juices", prices: { M: 240, L: 390 }, tags: ["Fresh", "Minty"] },
  { name: "Mosumbi Juice", category: "fresh-juices", prices: { M: 150, L: 250 }, tags: ["Citrus", "Fresh"] },
  { name: "Anar (Pomegranate) Juice", category: "fresh-juices", prices: { M: 210, L: 310 }, tags: ["Healthy", "Fresh"] },
  { name: "Pineapple Juice", category: "fresh-juices", prices: { M: 140, L: 230 }, tags: ["Fresh", "Fruit"] },
  { name: "Watermelon Juice", category: "fresh-juices", prices: { M: 130, L: 230 }, tags: ["Hydrating", "Fresh"] },
  { name: "Imported Apple Juice", category: "fresh-juices", prices: { M: 390, L: 590 }, tags: ["Fruit", "Premium"] },
  { name: "Fresh Coconut Water", category: "fresh-juices", prices: { Standard: "Seasonal" }, tags: ["Hydrating", "Healthy"] },
  { name: "Mosumbi + Anar Mix", category: "fresh-juices", prices: { M: 290, L: 450 }, tags: ["Citrus", "Healthy"] },
  { name: "Green Apple Imported Juice", category: "fresh-juices", prices: { M: 390, L: 590 }, tags: ["Citrus", "Premium"] },
  { name: "Imported Orange Juice", category: "fresh-juices", prices: { M: 350, L: 410 }, tags: ["Citrus", "Premium"] },
  { name: "Kiwi & Pineapple Juice", category: "fresh-juices", prices: { M: 280, L: 420 }, tags: ["Exotic", "Fresh"] },
  { name: "Sweet Melon Juice", category: "fresh-juices", prices: { M: 120, L: 230 }, tags: ["Fresh", "Sweet"] },
  { name: "Mango Juice", category: "fresh-juices", prices: { M: 150, L: 250 }, tags: ["Fruit", "Sweet"] },
  { name: "Apple Juice", category: "fresh-juices", prices: { M: 150, L: 260 }, tags: ["Fruit", "Fresh"] },
  { name: "Orange Juice", category: "fresh-juices", prices: { M: 150, L: 250 }, tags: ["Citrus", "Fresh"] },
  { name: "Grapes Juice", category: "fresh-juices", prices: { M: 250, L: 400 }, tags: ["Fruit", "Fresh"] },
  { name: "Mix Fruit Juice", category: "fresh-juices", prices: { M: 240, L: 400 }, tags: ["Fruit", "Fresh"] },
  { name: "Guava Juice", category: "fresh-juices", prices: { M: 150, L: 250 }, tags: ["Fruit", "Fresh"] },
  { name: "Apple + Anar Juice", category: "fresh-juices", prices: { M: 299, L: 420 }, tags: ["Healthy", "Fruit"] },
  { name: "Anar Orange Juice", category: "fresh-juices", prices: { M: 290, L: 440 }, tags: ["Citrus", "Healthy"] },
  { name: "Anar Grapes Juice", category: "fresh-juices", prices: { M: 320, L: 500 }, tags: ["Fruit", "Healthy"] },
  { name: "Papaya Juice", category: "fresh-juices", prices: { M: 150, L: 235 }, tags: ["Fruit", "Healthy"] },
  { name: "Imported Grapes Juice", category: "fresh-juices", prices: { M: 440, L: 690 }, tags: ["Fruit", "Premium"] },
  { name: "Imported Apple Orange Juice", category: "fresh-juices", prices: { M: 440, L: 610 }, tags: ["Fruit", "Premium"] },
  { name: "Kiwi Juice", category: "fresh-juices", prices: { M: 220, L: 340 }, tags: ["Exotic", "Fresh"] },
  { name: "Apple + Orange Juice", category: "fresh-juices", prices: { M: 220, L: 340 }, tags: ["Fruit", "Citrus"] },
  { name: "Imported Peach + Strawberry", category: "fresh-juices", prices: { M: 440, L: 720 }, tags: ["Berry", "Premium"] },

  // --- Vegetable Juices ---
  { name: "Carrot Juice", category: "vegetable-juices", prices: { M: 120, L: 190 }, tags: ["Veggie", "Healthy"] },
  { name: "Beetroot + Carrot Juice", category: "vegetable-juices", prices: { M: 140, L: 230 }, tags: ["Veggie", "Healthy"] },
  { name: "Beetroot + Celery Juice", category: "vegetable-juices", prices: { M: 190, L: 290 }, tags: ["Veggie", "Healthy"] },
  { name: "Ginger Celery Juice", category: "vegetable-juices", prices: { M: 160, L: 250 }, tags: ["Veggie", "Spicy"] },
  { name: "Cool Age Juice", category: "vegetable-juices", prices: { M: 160, L: 250 }, tags: ["Veggie", "Cool"] },
  { name: "Cherry Tomato Radish Juice", category: "vegetable-juices", prices: { M: 160, L: 250 }, tags: ["Veggie", "Healthy"] },
  { name: "Amla Juice", category: "vegetable-juices", prices: { M: 160, L: 250 }, tags: ["Sour", "Healthy"] },
  { name: "Spinach + Carrot Juice", category: "vegetable-juices", prices: { M: 160, L: 250 }, tags: ["Veggie", "Healthy"] },
  { name: "Mix Veg Juice", category: "vegetable-juices", prices: { M: 140, L: 230 }, tags: ["Veggie", "Healthy"] },
  { name: "Beetroot Juice", category: "vegetable-juices", prices: { M: 160, L: 250 }, tags: ["Veggie", "Healthy"] },
  { name: "Cucumber + Celery Juice", category: "vegetable-juices", prices: { M: 200, L: 300 }, tags: ["Veggie", "Hydrating"] },
  { name: "Carrot Amla Juice", category: "vegetable-juices", prices: { M: 100, L: 230 }, tags: ["Healthy", "Sour"] },

  // --- Mix Vegetable & Fruit Juices ---
  { name: "Orange, Carrot & Beetroot Mix", category: "mixed-juices", prices: { M: 240, L: 390 }, tags: ["Citrus", "Veggie"] },
  { name: "Apple & Celery Mix", category: "mixed-juices", prices: { M: 230, L: 360 }, tags: ["Fruit", "Veggie"] },
  { name: "Fruitbest Juice", category: "mixed-juices", prices: { M: 160, L: 360 }, tags: ["Fruit", "Healthy"] },
  { name: "Sipster Special Juice", category: "mixed-juices", prices: { M: 260, L: 360 }, tags: ["Signature", "Premium"] },
  { name: "ABC (Apple, Beetroot, Carrot)", category: "mixed-juices", prices: { M: 260, L: 400 }, tags: ["Healthy", "Detox"] },
  { name: "Ginger Apple Carrot", category: "mixed-juices", prices: { M: 240, L: 390 }, tags: ["Detox", "Spicy"] },
  { name: "Pear Apple Carrot Celery", category: "mixed-juices", prices: { M: 190, L: 300 }, tags: ["Detox", "Healthy"] },
  { name: "Apple & Grape Fruit Mix", category: "mixed-juices", prices: { M: 230, L: 360 }, tags: ["Citrus", "Fruit"] },
  { name: "Cucumber Apple Celery Mix", category: "mixed-juices", prices: { M: 290, L: 440 }, tags: ["Detox", "Hydrating"] },
  { name: "Broccoli Apple Juice", category: "mixed-juices", prices: { M: 230, L: 350 }, tags: ["Healthy", "Green"] },
  { name: "Cucumber Pineapple Juice", category: "mixed-juices", prices: { M: 240, L: 350 }, tags: ["Hydrating", "Sweet"] },
  { name: "Orange Carrot Juice", category: "mixed-juices", prices: { M: 190, L: 300 }, tags: ["Citrus", "Healthy"] },
  { name: "Watermelon Cucumber Juice", category: "mixed-juices", prices: { M: 190, L: 290 }, tags: ["Hydrating", "Cool"] },
  { name: "Beetroot Anar Juice", category: "mixed-juices", prices: { M: 190, L: 290 }, tags: ["Detox", "Fruit"] },
  { name: "Mango & Spinach Mix", category: "mixed-juices", prices: { M: 290, L: 440 }, tags: ["Sweet", "Green"] },
  { name: "Watermelon Beetroot Cucumber Mix", category: "mixed-juices", prices: { M: 230, L: 360 }, tags: ["Hydrating", "Detox"] },

  // --- Smoothies ---
  { name: "Strawberry Orange Apple & Almond", category: "smoothies", prices: { M: 350, L: 540 }, tags: ["Creamy", "Nuts", "Berry"] },
  { name: "Kiwi Pineapple Melon & Banana", category: "smoothies", prices: { M: 390, L: 640 }, tags: ["Creamy", "Exotic"] },
  { name: "Orange Mango Smoothie", category: "smoothies", prices: { M: 300, L: 590 }, tags: ["Creamy", "Citrus"] },
  { name: "Green Apple & Avocado Smoothie", category: "smoothies", prices: { M: 530, L: 840 }, tags: ["Creamy", "Avocado", "Healthy"] },
  { name: "Strawberry Kiwi Orange Smoothie", category: "smoothies", prices: { M: 290, L: 490 }, tags: ["Berry", "Citrus"] },
  { name: "Mango Raspberry Smoothie", category: "smoothies", prices: { M: 530, L: 800 }, tags: ["Berry", "Sweet"] },
  { name: "Papaya Banana & Blueberry", category: "smoothies", prices: { M: 390, L: 630 }, tags: ["Berry", "Creamy"] },
  { name: "Strawberry Pineapple Smoothie", category: "smoothies", prices: { M: 280, L: 420 }, tags: ["Berry", "Sweet"] },
  { name: "Mix Melon Banana Dates", category: "smoothies", prices: { M: 320, L: 500 }, tags: ["Sweet", "Dates"] },
  { name: "Strawberry Blueberry Dates Smoothie", category: "smoothies", prices: { M: 400, L: 720 }, tags: ["Berry", "Dates"] },

  // --- Iced Tea ---
  { name: "Lemon Iced Tea", category: "iced-teas", prices: { Standard: 150 }, tags: ["Cool", "Citrus"] },
  { name: "Peach Iced Tea", category: "iced-teas", prices: { Standard: 150 }, tags: ["Cool", "Sweet"] },

  // --- Hard Scoops ---
  { name: "Ice Cream (Per Scoop)", category: "ice-creams", prices: { Standard: 60 }, tags: ["Cool", "Sweet"] },
  { name: "Tender Coconut Ice Cream (Per Scoop)", category: "ice-creams", prices: { Standard: 100 }, tags: ["Cool", "Coconut"] },

  // --- Cold Classics ---
  { name: "Sipster Frappe", category: "cold-classics", prices: { Standard: 220 }, tags: ["Coffee", "Sweet", "Cool"] },
  { name: "Iced Cafe Mocha", category: "cold-classics", prices: { Standard: 200 }, tags: ["Coffee", "Chocolate", "Cool"] },
  { name: "Iced Americano", category: "cold-classics", prices: { Standard: 120 }, tags: ["Coffee", "Bold", "Cool"] },
  { name: "Cold Coffee Mild", category: "cold-classics", prices: { Standard: 140 }, tags: ["Coffee", "Cool"] },
  { name: "Cold Coffee Strong", category: "cold-classics", prices: { Standard: 170 }, tags: ["Coffee", "Bold", "Cool"] },

  // --- Hot Classics ---
  { name: "Cappuccino", category: "hot-classics", prices: { Standard: 130 }, tags: ["Coffee", "Hot"] },
  { name: "Hot Chocolate", category: "hot-classics", prices: { Standard: 150 }, tags: ["Chocolate", "Hot", "Sweet"] },
  { name: "Latte", category: "hot-classics", prices: { Standard: 150 }, tags: ["Coffee", "Hot"] },
  { name: "Vanilla Latte", category: "hot-classics", prices: { Standard: 190 }, tags: ["Coffee", "Hot", "Sweet"] },
  { name: "Irish Latte", category: "hot-classics", prices: { Standard: 180 }, tags: ["Coffee", "Hot"] },
  { name: "Hazelnut Latte", category: "hot-classics", prices: { Standard: 190 }, tags: ["Coffee", "Hot", "Nuts"] },
  { name: "Caramel Latte", category: "hot-classics", prices: { Standard: 180 }, tags: ["Coffee", "Hot", "Sweet"] },
  { name: "Irish Cappuccino", category: "hot-classics", prices: { Standard: 180 }, tags: ["Coffee", "Hot"] },
  { name: "Hazelnut Cappuccino", category: "hot-classics", prices: { Standard: 180 }, tags: ["Coffee", "Hot", "Nuts"] },
  { name: "Caramel Cappuccino", category: "hot-classics", prices: { Standard: 180 }, tags: ["Coffee", "Hot", "Sweet"] },
  { name: "Americano", category: "hot-classics", prices: { Standard: 110 }, tags: ["Coffee", "Hot", "Bold"] },
  { name: "Espresso", category: "hot-classics", prices: { Standard: 90 }, tags: ["Coffee", "Hot", "Bold"] },
  { name: "Macchiato", category: "hot-classics", prices: { Standard: 110 }, tags: ["Coffee", "Hot"] },
  { name: "Affogato", category: "hot-classics", prices: { Standard: 150 }, tags: ["Coffee", "Cool", "Sweet"] },

  // --- Shakes ---
  { name: "Banana Shake", category: "shakes", prices: { M: 110, L: 190 }, tags: ["Sweet", "Fruit"] },
  { name: "Mixed Fruit Shake", category: "shakes", prices: { M: 200, L: 340 }, tags: ["Sweet", "Fruit"] },
  { name: "Strawberry Shake", category: "shakes", prices: { M: 180, L: 240 }, tags: ["Sweet", "Berry"] },
  { name: "Mango Shake", category: "shakes", prices: { M: 140, L: 230 }, tags: ["Sweet", "Fruit"] },
  { name: "Seetaphal Shake", category: "shakes", prices: { M: 260, L: 420 }, tags: ["Sweet", "Exotic"] },
  { name: "Sweet Melon Shake", category: "shakes", prices: { M: 170, L: 250 }, tags: ["Sweet", "Fruit"] },
  { name: "Chikoo Shake", category: "shakes", prices: { M: 210, L: 290 }, tags: ["Sweet", "Fruit"] },
  { name: "Avocado Shake (Imported)", category: "shakes", prices: { M: 280, L: 440 }, tags: ["Creamy", "Premium"] },
  { name: "Guava Shake", category: "shakes", prices: { M: 150, L: 247 }, tags: ["Sweet", "Fruit"] },
  { name: "Blueberry Shake", category: "shakes", prices: { M: 370, L: 560 }, tags: ["Sweet", "Berry"] },
  { name: "Alphonso Mango Shake", category: "shakes", prices: { M: 320, L: 420 }, tags: ["Sweet", "Premium"] },
  { name: "Date Shake", category: "shakes", prices: { M: 190, L: 350 }, tags: ["Sweet", "Dates"] },
  { name: "Kaju Kishmish Shake", category: "shakes", prices: { M: 350, L: 540 }, tags: ["Nuts", "Sweet"] },
  { name: "Dates Shake (with Dry Fruit)", category: "shakes", prices: { M: 320, L: 510 }, tags: ["Nuts", "Dates"] },
  { name: "Kitkat Shake", category: "shakes", prices: { M: 170, L: 250 }, tags: ["Chocolate", "Sweet"] },
  { name: "Dragon Fruit Shake", category: "shakes", prices: { M: 195, L: 340 }, tags: ["Exotic", "Sweet"] },
  { name: "Caramel Shake", category: "shakes", prices: { M: 185, L: 290 }, tags: ["Caramel", "Sweet"] },
  { name: "Papaya Shake", category: "shakes", prices: { M: 150, L: 230 }, tags: ["Sweet", "Fruit"] },
  { name: "Chocolate Shake", category: "shakes", prices: { M: 180, L: 230 }, tags: ["Chocolate", "Sweet"] },
  { name: "Egg Shake", category: "shakes", prices: { M: 210, L: 340 }, tags: ["Protein", "Unique"] },
  { name: "Walnut Kishmish Shake", category: "shakes", prices: { M: 240, L: 390 }, tags: ["Nuts", "Healthy"] },
  { name: "Kaju Badam Shake", category: "shakes", prices: { M: 340, L: 520 }, tags: ["Nuts", "Premium"] },
  { name: "Kaju Anjeer Shake", category: "shakes", prices: { M: 320, L: 520 }, tags: ["Nuts", "Premium"] },
  { name: "Mix Dryfruit Shake", category: "shakes", prices: { M: 310, L: 340 }, tags: ["Nuts", "Premium"] },
  { name: "Avocado + Mango Shake", category: "shakes", prices: { M: 290, L: 470 }, tags: ["Creamy", "Fruit"] },
  { name: "Mango + Blueberry Shake", category: "shakes", prices: { M: 290, L: 480 }, tags: ["Berry", "Sweet"] },
  { name: "Imported Mix Berries Shake", category: "shakes", prices: { M: 490, L: 790 }, tags: ["Berry", "Premium"] },
  { name: "Imported Avocado Fig Shake", category: "shakes", prices: { M: 400, L: 600 }, tags: ["Creamy", "Premium"] },
  { name: "Imported Avocado Dates Shake", category: "shakes", prices: { M: 390, L: 600 }, tags: ["Dates", "Premium"] },
  { name: "Badam Kishmish Shake", category: "shakes", prices: { M: 310, L: 420 }, tags: ["Nuts", "Sweet"] },
  { name: "Strawberry Banana Shake", category: "shakes", prices: { M: 250, L: 340 }, tags: ["Berry", "Fruit"] },
  { name: "Imported Raspberry Chocolate Shake", category: "shakes", prices: { M: 510, L: 790 }, tags: ["Berry", "Chocolate", "Premium"] },
  { name: "Peach Almond Shake", category: "shakes", prices: { M: 280, L: 420 }, tags: ["Fruit", "Nuts"] },
  { name: "Kiwi Coconut Shake", category: "shakes", prices: { M: 290, L: 430 }, tags: ["Exotic", "Sweet"] },
  { name: "Banana Peanut Butter Shake", category: "shakes", prices: { M: 250, L: 400 }, tags: ["Rich", "Nuts"] },
  { name: "Imported Avocado Blueberry Shake", category: "shakes", prices: { M: 420, L: 690 }, tags: ["Berry", "Creamy", "Premium"] },
  { name: "Apple Cinnamon Shake", category: "shakes", prices: { M: 260, L: 400 }, tags: ["Spiced", "Sweet"] },
  { name: "Raspberry Pistachio Shake", category: "shakes", prices: { M: 590, L: 890 }, tags: ["Berry", "Nuts", "Premium"] },
  { name: "Papaya Coconut Shake", category: "shakes", prices: { M: 240, L: 390 }, tags: ["Fruit", "Sweet"] },
  { name: "Mango Dragon Shake", category: "shakes", prices: { M: 240, L: 390 }, tags: ["Exotic", "Sweet"] },
  { name: "Oreo Milk Shake", category: "shakes", prices: { M: 140, L: 250 }, tags: ["Chocolate", "Sweet"] },
  { name: "Blueberry Cardamom Shake", category: "shakes", prices: { M: 355, L: 555 }, tags: ["Spiced", "Berry"] },
  { name: "Banana Dates Shake", category: "shakes", prices: { M: 190, L: 290 }, tags: ["Dates", "Sweet"] },
  { name: "Ajwa Dates Shake", category: "shakes", prices: { M: 430, L: 700 }, tags: ["Dates", "Premium"] },
  { name: "Imported Avocado Pistachio Shake", category: "shakes", prices: { M: 400, L: 590 }, tags: ["Nuts", "Creamy", "Premium"] },
  { name: "Plum Cardamom Shake", category: "shakes", prices: { M: 360, L: 420 }, tags: ["Spiced", "Fruit"] },
  { name: "Customised Shake", category: "shakes", prices: { Standard: "Market Price" }, tags: ["Custom"] },

  // --- Yogurt Based Smoothies ---
  { name: "Kiwi Yogurt Smoothie", category: "yogurt-smoothies", prices: { M: 310, L: 499 }, tags: ["Yogurt", "Sour"] },
  { name: "Strawberry Yogurt Smoothie", category: "yogurt-smoothies", prices: { M: 310, L: 499 }, tags: ["Yogurt", "Berry"] },
  { name: "Apple Yogurt Smoothie", category: "yogurt-smoothies", prices: { M: 210, L: 350 }, tags: ["Yogurt", "Sweet"] },
  { name: "Apple Kiwi Banana Smoothie", category: "yogurt-smoothies", prices: { M: 350, L: 450 }, tags: ["Yogurt", "Fruit"] },
  { name: "Apple Banana Smoothie", category: "yogurt-smoothies", prices: { M: 360, L: 390 }, tags: ["Yogurt", "Fruit"] },
  { name: "Strawberry Kiwi Smoothie", category: "yogurt-smoothies", prices: { M: 390, L: 590 }, tags: ["Yogurt", "Berry"] },
  { name: "Strawberry Dates Smoothie", category: "yogurt-smoothies", prices: { M: 430, L: 610 }, tags: ["Yogurt", "Dates"] },
  { name: "Berry Beet Smoothie", category: "yogurt-smoothies", prices: { M: 440, L: 700 }, tags: ["Yogurt", "Healthy"] },
  { name: "Blueberry Banana Smoothie", category: "yogurt-smoothies", prices: { M: 440, L: 700 }, tags: ["Yogurt", "Berry"] },
  { name: "Avocado Yogurt Smoothie", category: "yogurt-smoothies", prices: { M: 400, L: 600 }, tags: ["Yogurt", "Creamy"] },
  { name: "Mango Blueberry Smoothie", category: "yogurt-smoothies", prices: { M: 490, L: 710 }, tags: ["Yogurt", "Sweet"] },
  { name: "Blueberry Almond Bliss", category: "yogurt-smoothies", prices: { M: 440, L: 700 }, tags: ["Yogurt", "Nuts"] },
  { name: "Honey Banana Almond Smoothie", category: "yogurt-smoothies", prices: { M: 300, L: 480 }, tags: ["Yogurt", "Nuts"] },
  { name: "Mango Cashew Smoothie", category: "yogurt-smoothies", prices: { M: 430, L: 690 }, tags: ["Yogurt", "Nuts"] },
  { name: "Raspberry Hazelnut Banana", category: "yogurt-smoothies", prices: { M: 590, L: 880 }, tags: ["Yogurt", "Nuts", "Premium"] },
  { name: "Pear Dates Hazelnuts", category: "yogurt-smoothies", prices: { M: 450, L: 700 }, tags: ["Yogurt", "Nuts"] },
  { name: "Avocado Blueberry Almond Smoothie", category: "yogurt-smoothies", prices: { M: 550, L: 700 }, tags: ["Yogurt", "Nuts", "Premium"] },
  { name: "Strawberry Mango Coconut Smoothie", category: "yogurt-smoothies", prices: { M: 390, L: 600 }, tags: ["Yogurt", "Coconut"] },
  { name: "Pineapple Yogurt Smoothie", category: "yogurt-smoothies", prices: { M: 240, L: 400 }, tags: ["Yogurt", "Sweet"] },

  // --- Mojitos / Lemonades ---
  { name: "Classic Mojito", category: "mojitos", prices: { Standard: 150 }, tags: ["Cool", "Minty"] },
  { name: "Green Apple Mojito", category: "mojitos", prices: { Standard: 150 }, tags: ["Cool", "Exotic"] },
  { name: "Lemon Soda", category: "mojitos", prices: { Standard: 110 }, tags: ["Cool", "Citrus"] },
  { name: "Lemon Water", category: "mojitos", prices: { Standard: 70 }, tags: ["Cool", "Citrus"] },
  { name: "Virgin Mojito", category: "mojitos", prices: { Standard: 150 }, tags: ["Cool", "Minty"] },

  // --- Snacks ---
  { name: "Veg Grilled Sandwich", category: "snacks", prices: { Standard: 130 }, tags: ["Savory", "Warm"] },
  { name: "Fruit Sandwich", category: "snacks", prices: { Standard: 200 }, tags: ["Sweet", "Cool"] },
  { name: "Avocado Toast", category: "snacks", prices: { Standard: 300 }, tags: ["Savory", "Healthy", "Premium"] },

  // --- Sipster Signatures ---
  { name: "Cream in Crunch", category: "signatures", prices: { Standard: 290 }, tags: ["Signature", "Crunchy", "Sweet"] },
  { name: "Velvet Crunch", category: "signatures", prices: { Standard: 310 }, tags: ["Signature", "Crunchy", "Creamy"] },
  { name: "Honey Rush Bowl", category: "signatures", prices: { R: 399, M: 550, L: 699 }, tags: ["Signature", "Healthy", "Sweet"] },
  { name: "Strawberry Nutella", category: "signatures", prices: { M: 360, L: 800 }, tags: ["Signature", "Berry", "Sweet"] },
  { name: "Blueberry Nutella", category: "signatures", prices: { M: 310, L: 750 }, tags: ["Signature", "Berry", "Sweet"] },
  { name: "Blueberry Yogurt Cup", category: "signatures", prices: { M: 310, L: 750 }, tags: ["Signature", "Yogurt", "Berry"] },
  { name: "Strawberry Cream with Ice-Cream", category: "signatures", prices: { Standard: 260 }, tags: ["Signature", "Berry", "Sweet"] },
  { name: "Mango Melon Cream", category: "signatures", prices: { Standard: 240 }, tags: ["Signature", "Creamy", "Sweet"] },
  { name: "Strawberry + Chocolate Special", category: "signatures", prices: { Standard: 120 }, tags: ["Signature", "Chocolate", "Sweet"] },
  { name: "Strawberry + Chocolate + Dates with Nut", category: "signatures", prices: { Standard: 250 }, tags: ["Signature", "Nuts", "Dates", "Sweet"] }
];

// Load Favorites from LocalStorage
let favorites = JSON.parse(localStorage.getItem('sipster_favorites')) || [];

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  setupEventListeners();
  initQRGenerator();
  setupHeaderScroll();
});

// Header scroll shadow effect
function setupHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 100);
  });
}

// Initialize customer menu view
function initMenu() {
  const container = document.getElementById('menu-items-container');
  if (!container) return;
  
  renderMenu(MENU_ITEMS);
}

// Render menu items based on active search/filters
function renderMenu(items) {
  const container = document.getElementById('menu-items-container');
  if (!container) return;

  container.innerHTML = '';

  // Update item count badge
  const countEl = document.getElementById('menu-count');
  if (countEl) countEl.textContent = `${items.length} items`;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="no-results-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <p>No items match your search. Try adjusting filters or search term!</p>
      </div>
    `;
    return;
  }

  // Group items by category to make it beautiful
  const categories = {};
  items.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  const categoryTitles = {
    "fruit-salads": "Fruit Salads 🍓",
    "vegetable-salads": "Vegetable Salads 🥗",
    "fresh-juices": "Fresh Fruit Juices 🍊",
    "vegetable-juices": "Fresh Veggie Juices 🥕",
    "mixed-juices": "Fruit & Vegetable Blends 🥤",
    "smoothies": "Premium Fruit Smoothies 🥝",
    "iced-teas": "Refreshed Iced Tea 🍹",
    "ice-creams": "Hard Scoop Ice Creams 🍦",
    "cold-classics": "Cold Brew Classics ☕❄️",
    "hot-classics": "Hot Espresso Classics ☕🔥",
    "shakes": "Rich Milk Shakes 🥛🍫",
    "yogurt-smoothies": "Yogurt Smoothies 🥛🌾",
    "mojitos": "Vibrant Mojitos & Sodas 🍋",
    "snacks": "Signature Snacks 🥪🥑",
    "signatures": "Sipster's Exclusive Signatures ✨"
  };

  for (const catKey in categories) {
    const section = document.createElement('section');
    section.className = 'menu-section';
    section.id = `sec-${catKey}`;

    const title = document.createElement('h3');
    title.className = 'category-section-title';
    title.textContent = categoryTitles[catKey] || catKey.replace('-', ' ');
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    categories[catKey].forEach(item => {
      const isFav = favorites.includes(item.name);
      const card = document.createElement('div');
      card.className = `menu-card ${item.tags.includes('Signature') ? 'featured-card' : ''}`;
      
      // Determine pricing badges HTML
      let priceHTML = '';
      if (item.prices.Standard !== undefined) {
        const val = typeof item.prices.Standard === 'number' ? `₹${item.prices.Standard}` : item.prices.Standard;
        priceHTML = `<div class="price-badge single-price"><span class="price-lbl">Standard</span> <span class="price-val">${val}</span></div>`;
      } else {
        if (item.prices.R !== undefined) priceHTML += `<div class="price-badge"><span class="price-lbl">R</span> <span class="price-val">₹${item.prices.R}</span></div>`;
        if (item.prices.M !== undefined) priceHTML += `<div class="price-badge"><span class="price-lbl">M</span> <span class="price-val">₹${item.prices.M}</span></div>`;
        if (item.prices.L !== undefined) priceHTML += `<div class="price-badge"><span class="price-lbl">L</span> <span class="price-val">₹${item.prices.L}</span></div>`;
      }

      // Determine tags HTML
      const tagsHTML = item.tags.map(t => `<span class="tag-pill tag-${t.toLowerCase()}">${t}</span>`).join('');

      card.innerHTML = `
        <div class="card-header">
          <div class="card-title-area">
            <h4>${item.name}</h4>
            <div class="tags-container">${tagsHTML}</div>
          </div>
          <button class="fav-btn ${isFav ? 'active' : ''}" aria-label="Favorite this item" data-name="${item.name}">
            <svg class="heart-icon" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <div class="prices-container">${priceHTML}</div>
        </div>
      `;

      // Event listener for favorite button
      card.querySelector('.fav-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(item.name, card.querySelector('.fav-btn'));
      });

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  }
  
  if (window.observeNewElements) {
    window.observeNewElements();
  }
}

// Toggle Favorite state
function toggleFavorite(name, btn) {
  const index = favorites.indexOf(name);
  if (index === -1) {
    favorites.push(name);
    btn.classList.add('active');
    btn.querySelector('svg').setAttribute('fill', 'currentColor');
  } else {
    favorites.splice(index, 1);
    btn.classList.remove('active');
    btn.querySelector('svg').setAttribute('fill', 'none');
  }
  localStorage.setItem('sipster_favorites', JSON.stringify(favorites));

  // If we are in the "Favorites" tab view, filter on fly
  const activeTab = document.querySelector('.pill.active');
  if (activeTab && activeTab.dataset.cat === 'favorites') {
    filterMenu();
  }
}

// Set up UI event listeners
function setupEventListeners() {
  // Search bar
  const searchInput = document.getElementById('search-menu');
  if (searchInput) {
    searchInput.addEventListener('input', filterMenu);
  }

  // Category pills navigation
  const pills = document.querySelectorAll('.pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterMenu();
      
      // Auto scroll to container or list start on mobile
      const listHeading = document.getElementById('menu-list-heading');
      if (listHeading && window.innerWidth < 768) {
        listHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Tab switching (Menu vs QR Generator)
  const tabMenu = document.getElementById('tab-menu');
  const tabQr = document.getElementById('tab-qr');
  const viewMenu = document.getElementById('view-menu');
  const viewQr = document.getElementById('view-qr');

  if (tabMenu && tabQr && viewMenu && viewQr) {
    tabMenu.addEventListener('click', () => {
      tabMenu.classList.add('active');
      tabQr.classList.remove('active');
      viewMenu.classList.remove('hidden-view');
      viewQr.classList.add('hidden-view');
    });

    tabQr.addEventListener('click', () => {
      tabQr.classList.add('active');
      tabMenu.classList.remove('active');
      viewQr.classList.remove('hidden-view');
      viewMenu.classList.add('hidden-view');
      // Render the default QR code canvas when opening
      drawFlyer();
    });
  }

  // Floating scroll-to-top button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Core filtering logic for text search & category pills
function filterMenu() {
  const searchVal = document.getElementById('search-menu').value.toLowerCase().trim();
  const activeTab = document.querySelector('.pill.active');
  const activeCat = activeTab ? activeTab.dataset.cat : 'all';

  let filtered = MENU_ITEMS;

  // 1. Filter by category pill
  if (activeCat === 'favorites') {
    filtered = MENU_ITEMS.filter(item => favorites.includes(item.name));
  } else if (activeCat !== 'all') {
    filtered = MENU_ITEMS.filter(item => item.category === activeCat);
  }

  // 2. Filter by search value
  if (searchVal) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(searchVal) || 
      item.tags.some(tag => tag.toLowerCase().includes(searchVal))
    );
  }

  renderMenu(filtered);

  // Update Section Title
  const listHeading = document.getElementById('menu-list-heading');
  if (listHeading) {
    if (activeCat === 'all') {
      listHeading.textContent = searchVal ? `Search Results: "${searchVal}"` : "All Menu Items";
    } else if (activeCat === 'favorites') {
      listHeading.textContent = `My Favorites (${filtered.length})`;
    } else {
      const activeTabLabel = activeTab.textContent.trim();
      listHeading.textContent = searchVal ? `${activeTabLabel} matching "${searchVal}"` : activeTabLabel;
    }
  }
}

// --- Admin QR Generator & Custom Flyer Drawing Engine ---
function initQRGenerator() {
  const formInputs = [
    'qr-url', 'qr-fg-color', 'qr-bg-color', 'qr-text', 'qr-text-color', 
    'qr-border-color', 'flyer-layout', 'table-number', 'show-logo'
  ];

  formInputs.forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener('input', drawFlyer);
      elem.addEventListener('change', drawFlyer);
    }
  });

  // Download buttons
  const btnQrOnly = document.getElementById('download-qr-only');
  const btnFlyer = document.getElementById('download-flyer');

  if (btnQrOnly) {
    btnQrOnly.addEventListener('click', () => downloadCanvas('qr-only'));
  }
  if (btnFlyer) {
    btnFlyer.addEventListener('click', () => downloadCanvas('flyer'));
  }
}

// Generate the QR code data URL using canvas rendering
function getQRCodeCanvas(text, fgColor, bgColor, hasLogo, callback) {
  // We use standard library client side or a temporary element to generate
  const tempDiv = document.createElement('div');
  
  // Create QR Code in hidden element
  const qrcode = new QRCode(tempDiv, {
    text: text,
    width: 512,
    height: 512,
    colorDark: fgColor,
    colorLight: bgColor,
    correctLevel: QRCode.CorrectLevel.H // High error correction to allow center logo
  });

  // Since qrcode.js draws to image / canvas asynchronously sometimes, check in an interval
  const checkInterval = setInterval(() => {
    const canvas = tempDiv.querySelector('canvas');
    if (canvas) {
      clearInterval(checkInterval);
      
      // We got the base QR canvas, now we draw it to a formatted result with logo if selected
      const resultCanvas = document.createElement('canvas');
      resultCanvas.width = 512;
      resultCanvas.height = 512;
      const ctx = resultCanvas.getContext('2d');
      
      // Draw standard QR
      ctx.drawImage(canvas, 0, 0);

      if (hasLogo) {
        // Overlay Sipster Custom Juice Box Logo in the center of QR code
        const size = resultCanvas.width;
        const logoSize = Math.floor(size * 0.22); // ~22% size
        const center = size / 2;
        const startX = center - logoSize / 2;
        const startY = center - logoSize / 2;

        // White background border block
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        // Rounded border box for logo
        const rad = 10;
        ctx.roundRect(startX - 6, startY - 6, logoSize + 12, logoSize + 12, rad);
        ctx.fill();

        ctx.strokeStyle = fgColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw orange drink cup logo
        const cupWidth = logoSize * 0.55;
        const cupHeight = logoSize * 0.55;
        const cupX = center - cupWidth / 2;
        const cupY = center - cupHeight / 2 + (logoSize * 0.08);

        // Orange base
        ctx.fillStyle = '#F28F00';
        ctx.beginPath();
        ctx.roundRect(cupX, cupY, cupWidth, cupHeight, 6);
        ctx.fill();

        // White/Green straw
        ctx.strokeStyle = fgColor;
        ctx.lineWidth = Math.floor(logoSize * 0.08);
        ctx.beginPath();
        ctx.moveTo(center, cupY);
        ctx.lineTo(center + (logoSize * 0.15), cupY - (logoSize * 0.22));
        ctx.stroke();

        // Green cup lid
        ctx.fillStyle = fgColor;
        ctx.fillRect(cupX - 2, cupY - 4, cupWidth + 4, 6);
      }

      callback(resultCanvas);
    }
  }, 50);
}

// Master draw function for Flyer & QR Code Preview Canvas
function drawFlyer() {
  const canvas = document.getElementById('flyer-preview-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  // Read form configurations
  const url = document.getElementById('qr-url').value || 'https://abrarlarah.github.io/sipster/sipster%20menu.pdf';
  const fgColor = document.getElementById('qr-fg-color').value || '#4E7A3E';
  const bgColor = document.getElementById('qr-bg-color').value || '#FFFFFF';
  const labelText = document.getElementById('qr-text').value || 'SCAN FOR MENU';
  const textColor = document.getElementById('qr-text-color').value || '#4E7A3E';
  const borderColor = document.getElementById('qr-border-color').value || '#4E7A3E';
  const layout = document.getElementById('flyer-layout').value || 'portrait-stand';
  const tableNum = document.getElementById('table-number').value || '';
  const showLogo = document.getElementById('show-logo').checked;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Layout sizing
  if (layout === 'square-sticker') {
    canvas.width = 600;
    canvas.height = 600;
  } else {
    // Portrait standard flyer
    canvas.width = 600;
    canvas.height = 850;
  }

  const W = canvas.width;
  const H = canvas.height;

  // 1. Draw Background
  ctx.fillStyle = '#FCF9F5'; // Off-white cream color
  ctx.fillRect(0, 0, W, H);

  // 2. Draw Decorative Brand Circles (as seen in original menu PDF design)
  ctx.fillStyle = '#E8F2E3'; // Light green highlight
  ctx.beginPath();
  ctx.arc(W - 20, 40, 120, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = fgColor + '15'; // Very light brand color opacity
  ctx.beginPath();
  ctx.arc(40, H - 40, 160, 0, Math.PI * 2);
  ctx.fill();

  // 3. Draw Outer Borders
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, W - 14, H - 14);

  // Thin inner border
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, W - 44, H - 44);

  // 4. Header: Brand Logo Text & Icon
  ctx.textAlign = 'center';

  // Logo cup icon
  const cupX = W / 2 - 130;
  const cupY = 80;
  const cupW = 34;
  const cupH = 36;
  ctx.fillStyle = '#F28F00'; // Brand Orange
  ctx.beginPath();
  ctx.roundRect(cupX, cupY, cupW, cupH, 5);
  ctx.fill();
  
  // Straw on cup
  ctx.strokeStyle = fgColor;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cupX + cupW / 2, cupY);
  ctx.lineTo(cupX + cupW / 2 + 10, cupY - 12);
  ctx.stroke();
  
  // Cup lid
  ctx.fillStyle = fgColor;
  ctx.fillRect(cupX - 2, cupY - 3, cupW + 4, 4);

  // Title: "Sipster"
  ctx.fillStyle = fgColor;
  ctx.font = "bold 56px 'Playfair Display', serif, Georgia";
  ctx.fillText("sipster", W / 2 + 25, 115);

  // Subtitle: "Juices • Smoothies • Salads"
  ctx.fillStyle = '#6E6E6E';
  ctx.font = "500 18px 'Outfit', sans-serif, Helvetica";
  ctx.fillText("JUICES  •  SMOOTHIES  •  SALADS", W / 2, 150);

  // Divider
  ctx.strokeStyle = fgColor;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 120, 175);
  ctx.lineTo(W / 2 + 120, 175);
  ctx.stroke();

  // 5. Draw QR code
  getQRCodeCanvas(url, fgColor, bgColor, showLogo, (qrCanvas) => {
    // Center of flyer positioning
    const qrSize = 320;
    const qrX = (W - qrSize) / 2;
    const qrY = layout === 'square-sticker' ? 200 : 220;

    // Draw card background for the QR Code (Drop shadow feel)
    ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
    ctx.shadowBlur = 25;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(qrX - 15, qrY - 15, qrSize + 30, qrSize + 30, 15);
    ctx.fill();

    // Reset shadow for further draws
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Draw QR code image onto canvas
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);

    // Draw dynamic card border
    ctx.strokeStyle = fgColor + '30';
    ctx.lineWidth = 1;
    ctx.strokeRect(qrX - 15, qrY - 15, qrSize + 30, qrSize + 30);

    // 6. Draw Call-to-action Text Label (e.g. SCAN FOR MENU)
    const labelY = layout === 'square-sticker' ? 570 : 610;
    ctx.fillStyle = textColor;
    ctx.font = "800 32px 'Outfit', sans-serif, Helvetica";
    ctx.fillText(labelText.toUpperCase(), W / 2, labelY);

    if (layout !== 'square-sticker') {
      // 7. Draw bottom instructions/details
      ctx.fillStyle = '#6E6E6E';
      ctx.font = "italic 16px 'Outfit', sans-serif";
      ctx.fillText("Point your phone camera at the QR code", W / 2, 660);

      // Draw table number if provided
      if (tableNum.trim() !== '') {
        const tblY = 740;
        ctx.fillStyle = fgColor;
        ctx.font = "bold 26px 'Outfit', sans-serif";
        ctx.fillText(`TABLE: ${tableNum.toUpperCase()}`, W / 2, tblY);

        ctx.strokeStyle = fgColor + '50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(W / 2 - 80, tblY + 8);
        ctx.lineTo(W / 2 + 80, tblY + 8);
        ctx.stroke();
      }

      // Footer brand details
      ctx.fillStyle = '#8C8C8C';
      ctx.font = "500 13px 'Outfit', sans-serif";
      ctx.fillText("SIPSTER  |  FIRE SERVICE LANE, BARAMULLA", W / 2, H - 45);
    }
  });
}

// Download function trigger
function downloadCanvas(type) {
  const url = document.getElementById('qr-url').value || 'https://abrarlarah.github.io/sipster/sipster%20menu.pdf';
  const fgColor = document.getElementById('qr-fg-color').value || '#4E7A3E';
  const bgColor = document.getElementById('qr-bg-color').value || '#FFFFFF';
  const showLogo = document.getElementById('show-logo').checked;
  
  if (type === 'qr-only') {
    // Create a standalone canvas just for the QR code
    getQRCodeCanvas(url, fgColor, bgColor, showLogo, (qrCanvas) => {
      const link = document.createElement('a');
      link.download = 'sipster_menu_qr.png';
      link.href = qrCanvas.toDataURL('image/png');
      link.click();
    });
  } else {
    // Download the full table stand flyer
    const canvas = document.getElementById('flyer-preview-canvas');
    if (!canvas) return;

    // Use a small timeout to make sure drawing is fully complete
    setTimeout(() => {
      const link = document.createElement('a');
      link.download = 'sipster_menu_table_flyer.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }, 100);
  }
}

// =========================================================
// PREMIUM ANIMATIONS (AOS & PARALLAX)
// =========================================================

function initScrollAnimations() {
  // Parallax effect for the hero background
  const heroBg = document.querySelector('.hero-premium-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      // Move background 40% of the scroll distance
      heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        // Optional: stop observing once animated
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('[data-aos]');
  animateElements.forEach(el => observer.observe(el));

  // Also expose a function to trigger animation on newly generated menu cards
  window.observeNewElements = function() {
    const newCards = document.querySelectorAll('.menu-card:not(.aos-animate)');
    newCards.forEach((card, index) => {
      // Add a slight delay based on index for staggered loading
      card.style.transitionDelay = `${(index % 10) * 0.05}s`;
      card.setAttribute('data-aos', 'fade-up');
      observer.observe(card);
    });
  };
}

// Call init on load
document.addEventListener('DOMContentLoaded', () => {
  // Wait a tiny bit to ensure cards are rendered
  setTimeout(initScrollAnimations, 100);
});
