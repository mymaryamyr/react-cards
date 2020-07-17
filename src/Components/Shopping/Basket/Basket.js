import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../../data.json'
import s from './BasketDetail.module.css'
import { Link } from 'react-router-dom';
import { removeItem, emptyBasket, calcFinal } from '../../store/actions/index'
import { totalCount } from '../../store/selectors/basketSelector';
import {  withTranslation } from "react-i18next";


class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountedPrice: this.props.totalPrice.toLocaleString()
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
    const { totalPrice} = this.props;
    const input = document.getElementById("discount-input")

    if (input.value === "keshmoon10") {

      if(totalPrice > 100000) {
        this.setState({discountedPrice: (totalPrice - 10000).toLocaleString()})

      } else {
        this.setState({discountedPrice: (Math.round(9 * totalPrice) / 10).toLocaleString()})
      }
    } else if (input.value === "keshmoon20") {

      if(totalPrice < 20000) {
        this.setState({discountedPrice: 0})
      } else {
        this.setState({discountedPrice: (totalPrice - 20000).toLocaleString()})
      }
    } 
  }
  
  render () {
    let { items, totalPrice, totalCount, t } = this.props;
    let { discountedPrice } = this.state
    return (
      (totalCount !== 0 ? 
        <div>
          <table className={s.table}>
            <thead>
              <tr className={s.tr}>
                <td>{t("basket.image")}</td>
                <td>{t("basket.id")}</td>
                <td>{t("basket.qty")}</td>
                <td>{t("basket.price")}</td>
                <td>{t("basket.remove")}</td>
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
                      <p>{item.count}</p>
                    </td>
                    <td>
                        <p>{((item.price)*(item.count)).toLocaleString()}</p>
                    </td>
                    <td>
                        <button onClick={() => {this.delete(item.id)}}>{t("basket.remove")}</button>
                    </td>
                </tr>           
            </tbody>
            ))}
          </table>
          <table className={s.table}>
            <tbody>
              <tr>
                <td>{t("basket.total")}</td>
                <td className={s.td}>{totalPrice.toLocaleString()}</td>
              </tr>
              <tr>
                <td>{t("basket.discount")}</td>
                <td className={s.td}>
                  <input 
                    className={s.input}
                    id="discount-input"
                  />
                  <button 
                    className={s.inputBtn}
                    onClick={this.discount}
                  >
                  {t("basket.push")}
                  </button>
                </td>
              </tr>  
              <tr>
                <td>{t("basket.final")}</td>
                <td className={s.td}>{discountedPrice}</td>
              </tr>      
              <tr className={s.empty}>
              <td>
              <button onClick={this.deleteAll}>{t("basket.empty")}</button>
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

function mapDispatchToProps(dispatch) {
  return {
    removeItem: item => dispatch(removeItem(item)),
    emptyBasket: () => dispatch(emptyBasket()),
    calcFinal: totalPrice => dispatch(calcFinal(totalPrice))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Basket));;