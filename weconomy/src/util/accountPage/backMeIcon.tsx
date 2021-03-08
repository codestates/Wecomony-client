import { IoFastFoodOutline } from 'react-icons/io5';
import { IoSubway } from 'react-icons/io5';
import { IoAirplaneOutline } from 'react-icons/io5';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { ImCoinDollar } from 'react-icons/im';
import { RiGroupLine } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';
import { BiFootball } from 'react-icons/bi';
import { MdLocalPostOffice } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { RiCoinsLine } from 'react-icons/ri';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

const backMeIcon = (category: string) => {
  if (category === '식비') {
    return <IoFastFoodOutline />;
  } else if (category === '교통') {
    return <IoSubway />;
  } else if (category === '통신') {
    return <IoPhonePortraitOutline />;
  } else if (category === '세금') {
    return <ImCoinDollar />;
  } else if (category === '경조사') {
    return <RiGroupLine />;
  } else if (category === '여행') {
    return <IoAirplaneOutline />;
  } else if (category === '쇼핑') {
    return <FiShoppingCart />;
  } else if (category === '취미') {
    return <BiFootball />;
  } else if (category === '기타') {
    return <MdLocalPostOffice />;
  } else if (category === '월급') {
    return <GiMoneyStack />;
  } else if (category === '잔돈') {
    return <RiCoinsLine />;
  } else if (category === '비상금') {
    return <RiMoneyDollarBoxLine />;
  }
};

export default backMeIcon;
