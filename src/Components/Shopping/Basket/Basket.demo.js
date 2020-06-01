import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../../data.json'
import { Link } from 'react-router-dom';
import { removeItem, emptyBasket } from '../../store/actions/index'
import s from './BasketDemo.module.css'

class BasketDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    let { items, totalPrice, totalCount, count } = this.props;
    const { final } = this.state;
    return (
      (totalCount !== 0 ? 
        <div className={s.div}
        >
          <table className={s.table}>
            <thead>
              <tr className={s.tr}>
                <td>عکس</td>
                <td>تعداد</td>
                <td>قیمت</td>
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
                      <p>{count}</p>
                      </td>
                      <td>
                          <p>{(totalPrice).toLocaleString()}</p>
                      </td>
                  </tr>           
              </tbody>
            ))}
          </table>

        </div>
        :
        <div className={s.div}>
          <p className={s.p}>سبد خرید شما خالی است.</p>
        </div>
      )
    )
  }
}



function mapStateToProps(state) {
  let count = state.items[Object.keys(state.items).find(idString => list.find(listItem => listItem.id.toString() == idString))].count
  function calculation (items) {
    const calc = items.map(i => (i.price) * count).reduce((a, b) => a + b, 0)
    return  (calc)
  }
  const fullItems = Object.keys(state.items).map(idString => list.find(listItem => listItem.id.toString() == idString));
  return {
    items: fullItems,
    totalPrice: calculation(fullItems),
    totalCount: state.totalCount,
    count: count
  };
}


export default connect(mapStateToProps)(BasketDemo);