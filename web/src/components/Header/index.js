import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="FasFeet" />
        </NavLink>
        <ul>
          <li>
            <NavLink activeClassName="selected" to="/orders">
              encomendas
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/deliverymen">
              entregadores
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/recipients">
              destinatários
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/problems">
              problemas
            </NavLink>
          </li>
        </ul>
      </nav>
      <aside>
        <p>{profile.name}</p>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </aside>
    </Container>
  );
}
