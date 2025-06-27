import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DoctorAppointment from '../../../modules/doctor-appointment/doctor-appointment.screen';
import LaboratoryTests from '../../../modules/laboratory-tests/laboratory-tests.screen';
import MedicalCard from '../../../modules/medical-card/medical-card.screen';
import MedicalHistory from '../../../modules/medical-history/medical-history.screen';
import Prescriptions from '../../../modules/prescriptions/precriptions.screen';
import Referrals from '../../../modules/referrals/referrals.screen';
import Vaccination from '../../../modules/vaccination/vaccination.screen';
import MedicalHeader from '../../../shared/components/header/medical-header/medical-header.component';
import {useAuthStore} from '../../../store/auth.store';
import {RouterKeys} from '../../keys';
import {MedicalStackScreens} from '../../route.types';

const MedicalStack = createNativeStackNavigator<MedicalStackScreens>();

const MedicalStackScreen = () => {
  const token = useAuthStore(state => state.token);
  return (
    <MedicalStack.Navigator initialRouteName={RouterKeys.MAIN}>
      <MedicalStack.Screen
        name={RouterKeys.MAIN}
        component={MedicalCard}
        options={{
          headerShown: false,
        }}
      />
      {!!token && (
        <>
          <MedicalStack.Screen
            name={RouterKeys.DOCTOR_APPOINTMENT}
            component={DoctorAppointment}
            options={{
              header: MedicalHeader,
            }}
          />
          <MedicalStack.Screen
            name={RouterKeys.MEDICAL_HISTORY}
            component={MedicalHistory}
            options={{
              header: MedicalHeader,
            }}
          />
          <MedicalStack.Screen
            name={RouterKeys.LAB_ANALYSIS}
            component={LaboratoryTests}
            options={{
              header: MedicalHeader,
            }}
          />
          <MedicalStack.Screen
            name={RouterKeys.REFERRAL}
            component={Referrals}
            options={{
              header: MedicalHeader,
            }}
          />
          <MedicalStack.Screen
            name={RouterKeys.VACCINATION}
            component={Vaccination}
            options={{
              header: MedicalHeader,
            }}
          />
          <MedicalStack.Screen
            name={RouterKeys.PRESCRIPTIONS}
            component={Prescriptions}
            options={{
              header: MedicalHeader,
            }}
          />
        </>
      )}
    </MedicalStack.Navigator>
  );
};

export default MedicalStackScreen;
