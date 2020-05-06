import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../data.json'
import BasketDetail from './BasketDetail';
import s from './BasketDetail.module.css'
import { Link } from 'react-router-dom';

const Basket = ({ items }) => (
  (items.length !== 0 ? 
    <div>
      <table class={s.table}>
        <tr className={s.tr}>
            <td>عکس</td>
            <td>آیدی</td>
            <td>قیمت</td>
            <td>حذف</td>
        </tr>
      {items.map(el => (
            <BasketDetail
                product={list.find(item => item.id == el.id)}
                id={el.id}
            />
        ))}
      </table>
      <table class={s.table}>
        <tr>
          <td>مجموع</td>
          <td>{}</td>
        </tr>
        <tr> <td>مالیات</td></tr>
        <tr>
          <td>کدتخفیف</td>
          <td>
            <input class={s.input}/>
            <button class={s.inputBtn}>اعمال کد</button>
          </td>
        </tr>  
        <tr><td>مبلغ نهایی</td></tr>      
        <button className={s.empty}>خالی کردن سبد</button>
      </table>
    </div>
    :
    <div>
      <p>سبد خرید شما خالی است.</p>
      <p>بازگشت به<span><Link to="/listing"> فروشگاه </Link></span></p>
    </div>
  )

);

function mapStateToProps(state) {
    return {
      items: state.items
    };
}



export default connect(mapStateToProps)(Basket);