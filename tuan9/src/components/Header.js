import React from 'react';
import { Appbar, IconButton } from 'react-native-paper';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: '#8865FF' }}>
      <Appbar.Content title="Hello, Roise!" titleStyle={{ flexGrow: 1 }} />
      <Appbar.Action icon={() => <ShoppingCartIcon />} onPress={() => {}} />
      <Appbar.Action icon={() => <NotificationsIcon />} onPress={() => {}} />
    </Appbar.Header>
  );
};

export default Header;
