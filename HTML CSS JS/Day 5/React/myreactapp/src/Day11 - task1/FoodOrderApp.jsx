import React from 'react'
import RestaurantInfoPanel from './RestaurantInfoPanel';

export default function FoodOrderApp() {

  const [itemCount, setItemCount] = React.useState(0);

  return (
    <div>
      <RestaurantInfoPanel />
      <p>Item Count: {itemCount}</p>
      <button onClick={() => setItemCount(count => count + 1)}>Add Item</button>
      <button onClick={() => setItemCount(count => count - 1)}>Remove Item</button>
    </div>
  )
}
