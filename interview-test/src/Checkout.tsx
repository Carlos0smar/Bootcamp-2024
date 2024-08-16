import styles from './Checkout.module.css';
import React, { useEffect, useState } from 'react';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  *- The add and remove buttons should adjust the ordered quantity of each product
//  *- The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  *- The total shown for each product should be calculated based on the ordered quantity and the price
//  *- The total in the order summary should be calculated
//  *- For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  *- The total should reflect any discount that has been applied
//  *- All dollar amounts should be displayed to 2 decimal places



const Product = ({ id, name, availableCount, price, orderedQuantity, total, addProduct, removeProduct }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>   
      <td>${total.toFixed(2)}</td>
      <td>
        <button className={styles.actionButton} onClick={addProduct} disabled={orderedQuantity >= availableCount}>+</button>
        <button className={styles.actionButton} onClick={removeProduct} disabled={orderedQuantity <= 0 }>-</button>
      </td>
    </tr>    
  );
}

type Product = {
  id: number;
  name: string;
  price: number;
  availableCount: number;
};

const Checkout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(fetchedProducts => {
      setProducts(fetchedProducts.map(product => ({
        ...product,
        orderedQuantity: 0,
        total: 0
      })));
      setLoading(false);
    });
  }, []);

  const handleAddProduct = (id: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          orderedQuantity: product.orderedQuantity + 1,
          total: (product.orderedQuantity + 1) * product.price
        };
      }
      return product;
    }));
  }


  const handleRemoveProduct = (id: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          orderedQuantity: product.orderedQuantity - 1,
          total: (product.orderedQuantity - 1) * product.price
        };
      }
      return product;
    }));
  }

  const totalPrice = products.reduce((acc, product) => acc + product.total, 0);
  const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
  const tatalDiscounted = totalPrice - discount;


  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {loading && loading?<LoadingIcon />: ""}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {products.map(product => (
            <Product 
              key={product.id} 
              {...product}
              addProduct={() => handleAddProduct(product.id)}
              removeProduct={() => handleRemoveProduct(product.id)}
             />
          ))}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount: {discount.toFixed(2)} $ </p>
        <p>Total: {tatalDiscounted.toFixed(2)}$ </p>       
        
      </main>
    </div>
  );
};

export default Checkout;