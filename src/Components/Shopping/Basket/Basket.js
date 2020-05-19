import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../../data.json'
import s from './BasketDetail.module.css'
import { Link } from 'react-router-dom';
import { removeItem, emptyBasket } from '../../store/actions/index'

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      final: this.props.totalPrice,
    }
  }
  delete = (id) => {
    const { removeItem } = this.props;
    removeItem(id)
  }
  deleteAll = () => {
    const { emptyBasket } = this.props;
    emptyBasket()
  }
  discount = () => {
    const { final } = this.state
    const input = document.getElementById("discount-input")

    if (input.value === "keshmoon10") {

      if(final > 200000) {
        this.setState({ final: (final - (20000)).toLocaleString() })
        return final
      } else {
        this.setState({ final: ((Math.round(9 * final)) / 10).toLocaleString() })
        return final
      }
    } else if (input.value === "keshmoon20") {
      if(final < 20000) {
        this.setState({ final: 0})
        return final
      } else {
        this.setState({ final: (final - 20000).toLocaleString() })
        return final
      }
    } 
    return final

  }
  changeQuantity = () => {
    const value = document.getElementById("selectQuantityBasket").value
    
    console.log(value)
  }
  render () {
    let { items, totalPrice, totalCount } = this.props;
    const { final } = this.state;
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
                    <select id="selectQuantityBasket" value={item.quantity} onChange={this.changeQuantity}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    </td>
                    <td>
                        <p>{((item.price)*(item.quantity)).toLocaleString()}</p>
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
                <td className={s.td}>{final.toLocaleString()}</td>
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

function calculation (items) {
  const calc = items.map(i => (i.price)*(i.quantity)).reduce((a, b) => a + b, 0)
  return  (calc)
}

function mapStateToProps(state) {
  const fullItems = Object.keys(state.items).map(idString => list.find(listItem => listItem.id.toString() == idString));
  return {
    items: fullItems,
    totalPrice: calculation(fullItems),
    totalCount: state.totalCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: item => dispatch(removeItem(item)),
    emptyBasket: () => dispatch(emptyBasket()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);