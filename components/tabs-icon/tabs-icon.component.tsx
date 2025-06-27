import React from 'react';
import {Text, View} from 'react-native';

import {textStyles} from '../../../shared/styles';
import {IconEnum} from '../../../shared/types/icon.type';
import getIcon from '../../../shared/utils/get-icon.util';
import {styles} from './tabs-icon.styles';

type TabsIconProps = {
  focused: boolean;
  icon: IconEnum;
  activeIcon: IconEnum;
  text: string;
};

const TabsIcon = ({focused, icon, activeIcon, text}: TabsIconProps) => {
  const Icon = getIcon(icon);
  const ActiveIcon = getIcon(activeIcon);
  return (
    <View style={styles.container}>
      {focused ? <ActiveIcon /> : <Icon />}
      <Text style={[textStyles.bodyText, styles.text]}>{text}</Text>
    </View>
  );
};

export default TabsIcon;
