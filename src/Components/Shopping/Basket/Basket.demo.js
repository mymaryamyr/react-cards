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
    let { items, totalPrice, totalCount } = this.props;
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
                      <p>{item.quantity}</p>
                      </td>
                      <td>
                          <p>{((item.price)*(item.quantity)).toLocaleString()}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(BasketDemo);