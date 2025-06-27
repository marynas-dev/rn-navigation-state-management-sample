import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AffiliateSchedule from '../../../modules/affiliate-schedule/affiliate-schedule.screen';
import Affiliate from '../../../modules/affiliate/affiliate.screen';
import DoctorDetails from '../../../modules/doctor-details/doctor-details.screen';
import DoctorSchedule from '../../../modules/doctor-schedule/doctor-schedule.screen';
import Home from '../../../modules/home/home.screen';
import MedicalFacilityDetails from '../../../modules/medical-facility-details/medical-facility-details.screen';
import SearchDoctors from '../../../modules/search-doctors/search-doctors.screen';
import SearchOrganization from '../../../modules/search-organization/search-organization.screen';
import SearchHeader from '../../../shared/components/header/search-header/search-header.component';
import {RouterKeys} from '../../keys';
import {SearchStackScreens} from '../../route.types';

const SearchStack = createNativeStackNavigator<SearchStackScreens>();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName={RouterKeys.SEARCH_HOME}>
      <SearchStack.Screen
        name={RouterKeys.SEARCH_HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name={RouterKeys.SEARCH_DOCTORS}
        component={SearchDoctors}
        options={{
          header: SearchHeader,
        }}
      />

      <SearchStack.Screen
        name={RouterKeys.SEARCH_ORGANIZATION}
        component={SearchOrganization}
        options={{
          header: SearchHeader,
        }}
      />
      <SearchStack.Screen
        name={RouterKeys.MEDICAL_FACILITY_DETAILS}
        component={MedicalFacilityDetails}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name={RouterKeys.DOCTOR_DETAILS}
        component={DoctorDetails}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name={RouterKeys.AFFILIATE}
        component={Affiliate}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name={RouterKeys.DOCTOR_SCHEDULE}
        component={DoctorSchedule}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name={RouterKeys.AFFILIATE_SCHEDULE}
        component={AffiliateSchedule}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
