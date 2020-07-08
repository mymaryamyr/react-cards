import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../../data.json'
import { Link } from 'react-router-dom';
import s from './BasketDemo.module.css';
import { totalCount } from '../../store/selectors/basketSelector'

class BasketDemo extends Component {
  render () {
    let { items, totalPrice, totalCount } = this.props;
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
                        <p>{item.count}</p>
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
  const storeBasketItemIds = Object.keys(state.items);
  const filteredList = list.filter(listItem => storeBasketItemIds.indexOf(listItem.id.toString()) !== -1);
  const fullList = filteredList.map(item => {
    return {
      ...item,
      ...state.items[item.id]
    }
  });

  return {
    items: fullList,
    totalPrice: fullList.reduce((acc, item) => (item.price * item.count) + acc, 0),
    totalCount: totalCount(state),
  };
}


export default connect(mapStateToProps)(BasketDemo);