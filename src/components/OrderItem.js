import '../styles/OrderItem.css'
import VoteScale from './VoteScale'

// water=vote, light=price, sclae=vote

function OrderItem({id, cover, name, vote, price }) {
    return  	(<li key={id} className='tra-pasta-item'>
    <img className='tra-pasta-item-cover' src={cover} alt={`${name} cover`} />
    {name}
    <div>
        <VoteScale voteType='vote' voteValue={vote} />
        <VoteScale voteType='price' voteValue={price} />
    </div>
</li>)
  }

  export default OrderItem