import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../data.json'
import s from './BasketDetail.module.css'
import { Link } from 'react-router-dom';
import { removeItem, emptyBasket } from '../store/actions/index'

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      final: this.props.total
    }
  }
  delete = (item) => {
    const { removeItem } = this.props;
    removeItem(item)
  }
  deleteAll = () => {
    const { emptyBasket } = this.props;
    emptyBasket()
  }
  discount = () => {
    const { total } = this.props
    const input = document.getElementById("discount-input")
    if (input.value === "keshmoon10") {
      if(total > 200000) {
        this.setState({ final: total - (20000) })
      } else {
        this.setState({ final: 0.9 * total})
      }
    } else if (input.value === "keshmoon20") {
      if(total < 20000) {
        this.setState({ final: 0})
      } else {
        this.setState({ final: total - 20000})
      }
    } else {
      return <p>کد وارد شده اشتباه است.</p>
    }
    return total
  }
  render () {
    const { items, total } = this.props;
    const { final } = this.state;
    return (
      (items.length !== 0 ? 
        <div>
          <table className={s.table}>
            <thead>
              <tr className={s.tr}>
                <td>عکس</td>
                <td>آیدی</td>
                <td>قیمت</td>
                <td>حذف</td>
              </tr>
            </thead>
          {items.map((item, index) => (
            <tbody key={index}>
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
                        <p>{item.price}</p>
                    </td>
                    <td>
                        <button onClick={this.delete}>حذف</button>
                    </td>
                </tr>           
            </tbody>
            ))}
          </table>
          <table className={s.table}>
            <tbody>
              <tr>
                <td>مجموع</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>کدتخفیف</td>
                <td>
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
                <td>{final}</td>
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
  const fullItems = state.items.map(basketItem => list.find(listItem => listItem.id == basketItem.id));
  function calculation (items) {
    const calc = items.map(i => i.price).reduce((a, b) => a + b, 0)
    return  (calc)
  }
  return {
    items: fullItems,
    total: calculation(fullItems),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: item => dispatch(removeItem(item)),
    emptyBasket: () => dispatch(emptyBasket()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);