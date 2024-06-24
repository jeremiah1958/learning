const shoppingList = (groceries) => {
    let formattedList = '';
    groceries.forEach(({ item, quantity }) => {
      formattedList += `${item}: ${quantity}\n`;
    });
    return formattedList;
  };
  
  // Example usage
  const groceries = [
    { item: 'Apples', quantity: 4 },
    { item: 'Bananas', quantity: 6 },
    { item: 'Carrots', quantity: 5 }
  ];
  
  console.log(shoppingList(groceries));
  