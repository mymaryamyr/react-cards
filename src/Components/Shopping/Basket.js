import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../data.json'
import BasketDetail from './BasketDetail';
import s from './BasketDetail.module.css'
import { Link } from 'react-router-dom';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      total: 0
    }
  }
  delete = (item) => {
    const items = this.state.items.filter(i => i.id !== item.id)
    this.setState({items})
  }
  deletAll = () => {
    const items = []
    this.setState({ items })
  }
  discount = () => {
    const { total } = this.state
    const input = document.getElementById("discount-input")
    if (input.value === "keshmoon10") {
      if(total > 200000) {
        this.setState({ total: total - (20000) })
      } else {
        this.setState({ total: 0.9 * total})
      }
    } else if (input.value === "keshmoon20") {
      if(total < 20000) {
        this.setState({ total: 0})
      } else {
        this.setState({ total: total - 20000})
      }
    } else {
      return <p>کد وارد شده اشتباه است.</p>
    }
  }
  render () {
    const { items } = this.state;
    const total = items.map(i => i.price).reduce((a, b) => a + b, 0)
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
                <BasketDetail
                  product={list.find(i => i.id == item.id)}
                  key={index}
                  id={item.id}
                  onClick={this.delete.bind(this, item)}
                />
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
              <tr><td>مبلغ نهایی</td></tr>      
              <tr className={s.empty}>
              <td>
              <button onClick={this.deletAll}>خالی کردن سبد</button>
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
    return {
      items: state.items
    };
}



export default connect(mapStateToProps)(Basket);