import {
      createAppContainer
    } from 'react-navigation';
import {
      createStackNavigator
    } from 'react-navigation-stack';

import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';

import themes from '../styles/theme.style';



const Route = createStackNavigator(
{
  Checkout: { screen: Checkout},
  Products: { screen: Products},
  Receipt: { screen: Receipt}
});



const AppNavigator = createAppContainer(Route);

export default AppNavigator;
