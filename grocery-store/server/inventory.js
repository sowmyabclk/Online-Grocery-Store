const inventoryItems = {
    "abcf234": {
      itemId: "abcf234",
      itemName: "Sugar",
      price: 2.00,
      quantity: 3,
      department: 'Food Grains',
      image: 'Sugar.jpg',
  
    },
    "uyu345": {
      itemId: "uyu345",
      itemName: "Rice",
      price: 3.00,
      quantity: 5,
      image: 'Rice.jpg',
      department: 'Food Grains',
  
    },
    "hjjjjjh123": {
      itemId: "hjjjjjh123",
      itemName: "Jaggery",
      price: 2.50,
      quantity: 15,
      image: 'jaggery.jpg',
      department: 'Food Grains',
  
    },
    "ghjggj123": {
      itemId: "ghjggj123",
      itemName: "Lentils",
      price: 1.00,
      quantity: 20,
      image: 'Lentils.jpg',
      department: 'Food Grains',
  
    },
  
    "hjhj345": {
      itemId: "hjhj345",
      itemName: "Apple",
      price: 1.29,
      quantity: 30,
      image: 'Apple.jpg',
      department: 'Fruits',
  
    },
  
    "ujyhuh123": {
      itemId: "ujyhuh123",
      itemName: "Banana",
      price: 0.59,
      quantity: 30,
      image: 'Banana.jpg',
      department: 'Fruits',
  
    },
  
    "kjkljl456": {
      itemId: "kjkljl456",
      itemName: "Grapes",
      price: 2.49,
      quantity: 10,
      image: 'Grapes.jpg',
      department: 'Fruits',
  
    },
  
    "iuiuiui678": {
      itemId: "iuiuiui678",
      itemName: "Watermelon",
      price: 4.00,
      quantity:10,
      image: 'Watermelon.jpg',
      department: 'Fruits',
  
    },
    "ggh123": {
      itemId: "ggh123",
      itemName: "Broccoli",
      price: 3.00,
      quantity: 10,
      image: 'Broccoli.jpg',
      department: 'Vegetables',
  
    },
    "hhj234": {
      itemId: "hhj234",
      itemName: "Cabbage",
      price: 1.69,
      quantity: 10,
      image: 'Cabbage.jpg',
      department: 'Vegetables',
  
    },
    "uyy456": {
      itemId: "uyy456",
      itemName: "Carrots",
      price: 0.79,
      quantity: 10,
      image: 'Carrots.jpg',
      department: 'Vegetables',
  
    },
    "gjhgh677": {
      itemId: "gjhgh677",
      itemName: "Cucumber",
      price: 2.49,
      quantity: 10,
      image: 'Cucumber.jpg',
      department: 'Vegetables',
  
    }
  
  };
  
  const getInventoryItem = () => {
    if(!inventoryItems) {
      return {};
    }
    return inventoryItems;
  };
  
  function modifyQuantity(itemId, quantityInfo) {
    inventory.inventoryItems[itemId].quantity = inventory.inventoryItems[itemId].quantity + parseInt(quantityInfo)
  }
  
  
  const inventory = {
    getInventoryItem,
    inventoryItems,
    modifyQuantity
  };
  
  module.exports = inventory;