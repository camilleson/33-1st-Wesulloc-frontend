import { useState } from 'react';
import CartItemList from './CartItemList';
import OrderButton from './OrderButton';
import SideBar from './SideBar';
import FreeGift from './FreeGift';
import ErrorModal from './components/ErrorModal';
import './Cart.scss';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isError, setIsError] = useState(null);
  const [itemList, setItemList] = useState([]);

  const costHandler = value => {
    setTotalPrice(value);
  };

  const errorHandler = value => {
    setIsError(value);
  };

  const listHandler = list => {
    setItemList(list);
  };

  const onClickBtn = (id, value) => {
    let orderedItemList = [];

    if (id) {
      orderedItemList = itemList.filter(item => {
        return item.id === id;
      });
      alert(`${orderedItemList[0].name} 제품을 주문합니다.`);
      return;
    }

    const checkedItemList = itemList.filter(item => item.isChecked);

    if (itemList.length === 0) {
      setIsError('nothingSelected');
      return;
    }

    ORDER.forEach(obj => {
      if (value === obj.button) {
        if (obj.button === 'orderSelectedBtn' && checkedItemList.length === 0) {
          setIsError('nothingSelected');
        } else {
          orderedItemList = obj.isOrderAll
            ? [...itemList]
            : [...checkedItemList];
          alert(obj.message);
        }
      }
    });
  };

  return (
    <>
      {isError && (
        <ErrorModal message={ERROR[isError]} errorHandler={errorHandler} />
      )}
      <section className="cart">
        <div className="cartPageTitle">
          <div className="cartTitleWrapper">
            <h2>장바구니</h2>
          </div>
        </div>
        <div className="cartPageContent">
          <section className="orderedItem">
            <CartItemList
              onChangeCost={costHandler}
              onErrorInput={errorHandler}
              onChangeList={listHandler}
              onClickBtn={onClickBtn}
            />
            {totalPrice >= 30000 && <FreeGift />}
            <div className="buttonWrapper">
              <OrderButton category="orderSelected" onClickBtn={onClickBtn} />
              <OrderButton category="orderAll" onClickBtn={onClickBtn} />
            </div>
          </section>
          <SideBar totalPrice={totalPrice} onClickBtn={onClickBtn} />
        </div>
      </section>
    </>
  );
};

const ERROR = {
  inputValueExceeded: '더이상 숫자를 늘릴 수 없습니다.',
  nothingSelected: '선택한 상품이 없습니다.',
};

const ORDER = [
  {
    button: 'orderSelectedBtn',
    message: '선택한 상품을 주문합니다.',
    isOrderAll: false,
  },
  {
    button: 'orderAllBtn',
    message: '전체 상품을 주문합니다.',
    isOrderAll: true,
  },
];

export default Cart;
