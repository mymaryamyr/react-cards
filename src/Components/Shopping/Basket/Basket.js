import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../../data.json'
import s from './BasketDetail.module.css'
import { Link } from 'react-router-dom';
import { removeItem, emptyBasket, calcFinal } from '../../store/actions/index'

class Basket extends Component {
  delete = (id) => {
    const { removeItem } = this.props;
    removeItem(id)
  }
  deleteAll = () => {
    const { emptyBasket } = this.props;
    emptyBasket()
  }
  discount = () => {
    const { calcFinal ,totalPrice} = this.props;
    calcFinal(totalPrice)

    const input = document.getElementById("discount-input")

    if (input.value === "keshmoon10") {

      if(totalPrice > 200000) {
        calcFinal((totalPrice - 20000).toLocaleString())
        return totalPrice
      } else {
        calcFinal((Math.round(9 * totalPrice) / 10).toLocaleString())
        return totalPrice
      }
    } else if (input.value === "keshmoon20") {

      if(totalPrice < 20000) {
        calcFinal(0)
        return 0
      } else {
        calcFinal((totalPrice - 20000).toLocaleString())
        return totalPrice
      }
    } 
  }
  changeQuantity = () => {
    const value = document.getElementById("selectQuantityBasket").value
    
    console.log(value)
  }
  render () {
    let { items, totalPrice, totalCount, count} = this.props;
    return (
      (totalCount !== 0 ? 
        <div>
          <table className={s.table}>
            <thead>
              <tr className={s.tr}>
                <td>عکس</td>
                <td>آیدی</td>
                <td>تعداد</td>
                <td>قیمت</td>
                <td>حذف</td>
              </tr>
            </thead>
          {items.map((item, id) => (
            <tbody key={id}>
              <tr className={s.tr}>
                    <td> 
                        <Link to={"/product/" + item.id}>
                            <img className={s.img} 
                                src={item.product_thumb_url} 
                                alt="Saffron">
                            </img>  
                        </Link>  
                    </td>
                    <td>
                        <Link to={"/product/" + item.id}>
                            <p>{item.id}</p>
                        </Link>
                    </td>
                    <td>
                      <p>{count}</p>
                    </td>
                    <td>
                        <p>{((item.price)*(count)).toLocaleString()}</p>
                    </td>
                    <td>
                        <button onClick={() => {this.delete(item.id)}}>حذف</button>
                    </td>
                </tr>           
            </tbody>
            ))}
          </table>
          <table className={s.table}>
            <tbody>
              <tr>
                <td>مجموع</td>
                <td className={s.td}>{totalPrice}</td>
              </tr>
              <tr>
                <td>کدتخفیف</td>
                <td className={s.td}>
                  <input 
                    className={s.input}
                    id="discount-input"
                  />
                  <button 
                    className={s.inputBtn}
                    onClick={this.discount}
                  >
                    اعمال کد
                  </button>
                </td>
              </tr>  
              <tr>
                <td>مبلغ نهایی</td>
                <td className={s.td}>{totalPrice}</td>
              </tr>      
              <tr className={s.empty}>
              <td>
              <button onClick={this.deleteAll}>خالی کردن سبد</button>
              </td>
              </tr>            
            </tbody>
          </table>
        </div>
        :
        <div>
          <p>سبد خرید شما خالی است.</p>
          <p>بازگشت به<span><Link to="/listing"> فروشگاه </Link></span></p>
        </div>
      )
    )
  }
}


function mapStateToProps(state) {
  const fullItems = Object.keys(state.items).map(idString => list.find(listItem => listItem.id.toString() == idString));
  const count = state.items[Object.keys(state.items).find(idString => list.find(listItem => listItem.id.toString() == idString))].count
  function calculation (items) {
    const calc = items.map(i => (i.price)*(count)).reduce((a, b) => a + b, 0)
    return  (calc)
  }

  return {
    items: fullItems,
    totalPrice: calculation(fullItems),
    totalCount: state.totalCount,
    count: count
    /*
      count: Object.keys(state.items).forEach(element => (state.items[element].count))
    */
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: item => dispatch(removeItem(item)),
    emptyBasket: () => dispatch(emptyBasket()),
    calcFinal: totalPrice => dispatch(calcFinal(totalPrice))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);