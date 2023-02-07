
function Cart() {
    const cartList = ['Farfalle con mozzarella','Fusilli con salmone','Linguine al sugo siciliano']
    const prices = [8,10,15]
  
  return (<div>
      <h2>Panier</h2>
      <ul>
      <li>{cartList[0]} : {prices[0]}€</li>
       <li>{cartList[1]} : {prices[1]}€</li>
       <li>{cartList[2]} : {prices[2]}€</li>
      </ul>
        Total : {prices[0] + prices[1] + prices[2] }€
        </div>)
  }

  export default Cart
