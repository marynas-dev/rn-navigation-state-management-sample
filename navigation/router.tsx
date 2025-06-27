import React from 'react';

import { ASSOCIATION_DOMAIN_LINK, ASSOCIATION_DOMAIN_LINK_TEST } from '@env';
import {
	DefaultTheme,
	LinkingOptions,
	NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useCheckAuth } from '../shared/hooks/check-auth.hook';
import { useInitializeLocationFromStorage } from '../shared/hooks/initialize-location-from-storage.hook';
import { colors } from '../shared/styles/colors';
import { RouterKeys } from '../keys';
import { navigationRef } from './root-navigation';
import { RootStackParamList } from './route.types';
import { privateRoutes, publicRoutes } from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router(): JSX.Element {
	useInitializeLocationFromStorage();
	const { token } = useCheckAuth();

	const linking: LinkingOptions<RootStackParamList> = {
		prefixes: [
			ASSOCIATION_DOMAIN_LINK,
			ASSOCIATION_DOMAIN_LINK_TEST,
			'com.default://',
		],
		config: {
			screens: {
				[RouterKeys.GENERAL]: {
					path: '/',
					screens: {
						[RouterKeys.HOME]: {
							path: '/',
							screens: {
								[RouterKeys.SEARCH_HOME]: ':type/:id',
							},
						},
					},
				},
			},
		},
	};

	return (
		<NavigationContainer
			ref={navigationRef}
			linking={linking}
			theme={{
				...DefaultTheme,
				colors: { ...DefaultTheme.colors, background: colors.blue05 },
			}}>
			<Stack.Navigator>{!token ? publicRoutes : privateRoutes}</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;
