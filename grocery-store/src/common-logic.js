export const totalValue = (items) => {
    let total=0.00;
    Object.values(items).map(item => (
      total+=parseFloat(item.totalValue)
      )
  )
  return total.toFixed(2);
  };