/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyDoctor from '../../../modules/my-doctor/my-doctor.screen';
import Other from '../../../modules/other/other.screen';
import {colors} from '../../../shared/styles/colors';
import {IconEnum} from '../../../shared/types/icon.type';
import {RouterKeys} from '../../keys';
import {HomeTabParamList} from '../../route.types';
import MedicalStackScreen from '../medical-stack-screen/medical-stack-screen.component';
import SearchStackScreen from '../search-stack-screen/search-stack-screen.component';
import TabsIcon from '../tabs-icon/tabs-icon.component';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs = () => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.blue20,
          height: 60 + insets.bottom,
          borderTopWidth: 1,
          borderTopColor: colors.blue40,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={RouterKeys.HOME}
        component={SearchStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <TabsIcon
              {...props}
              icon={IconEnum.Search}
              activeIcon={IconEnum.BoldSearch}
              text={t('search')}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouterKeys.MY_DOCTOR}
        component={MyDoctor}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <TabsIcon
              {...props}
              icon={IconEnum.FirstAidKit}
              activeIcon={IconEnum.FirstAidKitSolid}
              text={t('myDoctor')}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouterKeys.MEDICAL_CARD}
        component={MedicalStackScreen}
        options={{
          tabBarIcon: props => (
            <TabsIcon
              {...props}
              icon={IconEnum.User}
              activeIcon={IconEnum.UserSolid}
              text={t('firstAidKit')}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={RouterKeys.OTHER}
        component={Other}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <TabsIcon
              {...props}
              icon={IconEnum.Burger}
              activeIcon={IconEnum.BurgerSolid}
              text={t('other')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
