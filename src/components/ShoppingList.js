import { pastaList } from "../datas/pastaList";
import '../styles/ShoppingList.css'

/* const cartList = ['Farfalle con mozzarella','Fusilli con salmone','Linguine al sugo siciliano']

function ShoppingList() {
    return (
        <ul>
            {cartList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )
} */

function ShoppingList() {
  const categories = pastaList.reduce(
    (acc, pasta) =>
      acc.includes(pasta.category) ? acc : acc.concat(pasta.category),
    []
  );
  console.log("categories : " + categories);
  
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul> 
        {pastaList.map((pasta) => (
          <li key={pasta.id}>{pasta.name}  {(pasta.isBestSale || pasta.category==="Pâtes non-tubulaires") && <span>💚 </span>}</li>
        ))}
      </ul>
      <ul className='tra-pasta-list'>
				{pastaList.map((pasta) => (
					<li key={pasta.id} className='tra-pasta-item'>
						{pasta.name}
						{pasta.isSpecialOffer && <div className='tra-sales'>Soldes</div>}
					</li>
				))}
			</ul>
    </div>
  );
}

export default ShoppingList;
