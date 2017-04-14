module.exports = {
  "stores": {
    "Joe's Pizza on Bloor Ave": {
      "orders": [
        {
          "human": "Rami Sayar",
          "time": new Date(2016, 4, 5, 15, 11, 45, 0),
          "pizzas": [{
            "toppings": "Meat-Lovers",
            "size": "S"
          }],
          "price": 15,
          "address": "321 Sesame Street, Montreal, Canada",
          "status": "In The Oven" // status := Open -> Confirmed -> In The Oven -> Delivered
        },
        {
          "human": "Jeremy Foster",
          "time": new Date(2016, 4, 4, 20, 31, 0, 0),
          "pizzas": [{
            "toppings": ["cheese"],
            "size": "XL"
          }],
          "price": 15,
          "address": "123 Sesame Street, Montreal, Canada",
          "status": "Delivered" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    },
    "Joe's Pizza on University Ave": {
      "orders": []
    }
  },
  "humans": {
    "Rami Sayar" : {
      "conversations": [
        {
          "who": "bot",
          "text": "Hello, can I take your order?",
          "time": new Date(2016, 4, 5, 15, 10, 0, 0)
        },
        {
          "who": "human",
          "text": "Can I have a small meat-lovers pizza?",
          "time": new Date(2016, 4, 5, 15, 10, 30, 0)
        },
        {
          "who": "bot",
          "text": "Where would you like it delivered?",
          "time": new Date(2016, 4, 5, 15, 11, 0, 0)
        },
        {
          "who": "human",
          "text": "123 Sesame Street, Montreal, Canada",
          "time": new Date(2016, 4, 5, 15, 11, 30, 0)
        },
      ],
      "orders": [
        {
          "time": new Date(2016, 4, 5, 15, 11, 45, 0),
          "pizzas": [{
            "toppings": ["Meat-Lovers"],
            "size": "S"
          }],
          "price": 15,
          "address": "321 Sesame Street, Montreal, Canada",
          "status": "Confirmed" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    },
    "Jeremy Foster" : {
      "conversations": [
        {
          "who": "bot",
          "text": "Hello, can I take your order?",
          "time": new Date(2016, 4, 4, 20, 30, 0, 0)
        },
        {
          "who": "human",
          "text": "I would like to order an extra-large cheese pizza",
          "time": new Date(2016, 4, 4, 20, 30, 15, 0)
        },
        {
          "who": "bot",
          "text": "Where would you like it delivered?",
          "time": new Date(2016, 4, 4, 20, 30, 30, 0)
        },
        {
          "who": "human",
          "text": "123 Sesame Street, Montreal, Canada",
          "time": new Date(2016, 4, 4, 20, 30, 45, 0)
        },
      ],
      "orders": [
        {
          "time": new Date(2016, 4, 4, 20, 31, 0, 0),
          "pizzas": [{
            "toppings": ["cheese"],
            "size": "XL"
          }],
          "price": 15,
          "address": "123 Sesame Street, Montreal, Canada",
          "status": "Delivered" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    }
  },
  "menu": {
    "starter": [
      {
        "id":1,
        "name":"Superboost Salad",
        "description":"A superfood mix of black rice, edamame beans, red quinoa, mung beans, chickpeas, cranberries, pumpkin seeds and kale with rocket, roasted red & yellow peppers, parsley and our light house dressing",
        "image":"https://www.pizzaexpress.com/~/media/images/pe/menu-item/superboost-salad-697x697.ashx",
        "price":7
      },
      {
        "id":2,
        "name":"Risotto Fresco",
        "description":"Oak-roasted, peppered salmon fillet, garlic and fresh parsley in a creamy white wine risotto, with Gran Milano cheese, chopped fresh tomato and red onion: finished with a splash of chilli oil and a wedge of lemon",
        "image":"https://www.pizzaexpress.com/~/media/images/pe/menu-item/risotto-fresco-2-697x697.ashx",
        "price":7
      },
      {
        "id":3,
        "name":"Garlic Bread with Mozzarella",
        "description":"Our dough, baked with mozzarella and brushed with garlic butter",
        "image":"https://www.pizzaexpress.com/~/media/images/pe/menu-item/garlic-bread-with-mozzarella.ashx",
        "price":5
      },
      {
        "id":4,
        "name":"Polenta Chips",
        "description":"Italian polenta chips with rosemary, oven-baked and finished with Gran Milano cheese, served with a honey & mustard dressing dip",
        "image":"https://www.pizzaexpress.com/~/media/images/pe/menu-item/new-polenta-chips-697x697.ashx",
        "price":4.5
      }
    ]
  }
};

//https://www.pizzaexpress.com/our-food/collection-menu/collection-menu-section?section=2068e406-a19d-4909-af68-5c03d928cb56
