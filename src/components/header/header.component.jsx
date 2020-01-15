import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo-container' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      <OptionLink to='/signin'>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
      </OptionLink>
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
