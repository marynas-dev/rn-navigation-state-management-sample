import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddConnectedPerson from '../modules/add-connected-person/add-connected-person.screen';
import AppointmentDetails from '../modules/appointment-details/appointment-details.screen';
import AppointmentServices from '../modules/appointment-services/appointment-services.screen';
import Diagnoses from '../modules/diagnoses/diagnoses.components';
import DoctorExamination from '../modules/doctor-examination/doctor-examination.screen';
import EditConnectedPerson from '../modules/edit-connected-person/edit-connected-person.screen';
import EditContactData from '../modules/edit-contact-data/edit-contact-data.screen';
import Examination from '../modules/examination/examination.screen';
import Faq from '../modules/faq/faq.screen';
import IndicatorDetails from '../modules/indicator-details/indicator-details.screen';
import InformationSource from '../modules/information-source/information-source.screen';
import LabTestDetails from '../modules/lab-test-details/lab-test-details.screen';
import Location from '../modules/location/location.screen';
import Login from '../modules/login/login.screen';
import MedicineDetails from '../modules/medicine-details/medicine-details.screen';
import ObservationDetails from '../modules/observation-details/observation-details.screen';
import PasswordRecoveryOtp from '../modules/password-recovery-otp/password-recovery-otp.screen';
import PasswordRecovery from '../modules/password-recovery/password-recovery.screen';
import PrescriptionDetails from '../modules/prescription-details/prescription-details.screen';
import PrescriptionMedicinesDetails from '../modules/prescription-medicines-details/prescription-medicines-details.screen';
import ProcedureDetails from '../modules/procedure-details/procedure-details.screen';
import ProcedureResults from '../modules/procedure-results/procedure-results.screen';
import ProfileSettings from '../modules/profile-settings/profile-settings.screen';
import RecommendationDetails from '../modules/recommendation-details/recommendation-details.screen';
import ReferralDetails from '../modules/referral-details/referral-details.screen';
import Register from '../modules/register/register.screen';
import ResearchDetails from '../modules/research-details/research-details.screen';
import ResearchResults from '../modules/research-results/research-results.screen';
import Review from '../modules/review/review.screen';
import ScheduleAppointment from '../modules/schedule-appointment/schedule-appointment.screen';
import Search from '../modules/search/search.screen';
import Support from '../modules/support/support.screen';
import VaccinationDetails from '../modules/vaccination-details/vaccination-details.screen';
import VaccinationProtocols from '../modules/vaccination-protocols/vaccination-protocols.screen';
import VisitResults from '../modules/visit-results/visit-results.screen';
import AuthHeader from '../shared/components/header/auth-header/auth-header.component';
import MedicalHeader from '../shared/components/header/medical-header/medical-header.component';
import ProfileHeader from '../shared/components/header/profile-header/profile-header.component';
import SearchHeader from '../shared/components/header/search-header/search-header.component';
import HomeTabs from '../components/home-tabs/home-tabs.component';
import { RouterKeys } from '../keys';
import { RootStackParamList } from './route.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const publicRoutes = (
	<>
		<Stack.Screen
			name={RouterKeys.GENERAL}
			component={HomeTabs}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name={RouterKeys.LOGIN}
			component={Login}
			options={{ header: AuthHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PASSWORD_RECOVERY}
			component={PasswordRecovery}
			options={{ header: AuthHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PASSWORD_RECOVERY_OTP}
			component={PasswordRecoveryOtp}
			options={{ header: AuthHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.REGISTER}
			component={Register}
			options={{ header: AuthHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.SEARCH}
			component={Search}
			options={{ header: SearchHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.LOCATION}
			component={Location}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name={RouterKeys.FAQ}
			component={Faq}
			options={{ headerShown: false }}
		/>
	</>
);

export const privateRoutes = (
	<>
		<Stack.Screen
			name={RouterKeys.GENERAL}
			component={HomeTabs}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name={RouterKeys.DOCTOR_EXAMINATION}
			component={DoctorExamination}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.EXAMINATION_RESULTS}
			component={DoctorExamination}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.REFERRAL_DETAILS}
			component={ReferralDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.LAB_TEST_DETAILS}
			component={LabTestDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.LAB_TEST_RESEARCH}
			component={LabTestDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PROCEDURE_RESULTS}
			component={ProcedureResults}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.RESEARCH_RESULTS}
			component={ResearchResults}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.OBSERVATION_DETAILS}
			component={ObservationDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.DIAGNOSES}
			component={Diagnoses}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.VACCINATION_DETAILS}
			component={VaccinationDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.VACCINATION_PROTOCOLS}
			component={VaccinationProtocols}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PROCEDURE_DETAILS}
			component={ProcedureDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PRESCRIPTION_DETAILS}
			component={PrescriptionDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.RECOMMENDATION_DETAILS}
			component={RecommendationDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.MEDICINE_DETAILS}
			component={MedicineDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PRESCRIPTION_MEDICINES}
			component={PrescriptionMedicinesDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.INFORMATION_SOURCE}
			component={InformationSource}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.RESEARCH_DETAILS}
			component={ResearchDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.INDICATOR_DETAILS}
			component={IndicatorDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.APPOINTMENT_SERVICES}
			component={AppointmentServices}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.EXAMINATION}
			component={Examination}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.APPOINTMENT_DETAILS}
			component={AppointmentDetails}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.EDIT_CONTACT_DATA}
			component={EditContactData}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.ADD_CONNECTED_PERSON}
			component={AddConnectedPerson}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.ADD_CONNECTED_PERSON_PHONE_NUMBER}
			component={AddConnectedPerson}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.CONFIRM_CONNECTED_PERSON_PHONE_NUMBER}
			component={AddConnectedPerson}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.EDIT_CONNECTED_PERSON}
			component={EditConnectedPerson}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.EDIT_CONNECTED_PERSON_PHONE_NUMBER}
			component={EditConnectedPerson}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PROFILE_SETTINGS}
			component={ProfileSettings}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PROFILE_SETTINGS_PHONE_NUMBER}
			component={ProfileSettings}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PROFILE_SETTINGS_PERSONAL_DATA}
			component={ProfileSettings}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.PROFILE_SETTINGS_PASSWORD}
			component={ProfileSettings}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.VISIT_RESULTS}
			component={VisitResults}
			options={{ header: MedicalHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.SEARCH}
			component={Search}
			options={{ header: SearchHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.LOCATION}
			component={Location}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name={RouterKeys.SCHEDULE_APPOINTMENT}
			component={ScheduleAppointment}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.REVIEW}
			component={Review}
			options={{ header: ProfileHeader }}
		/>
		<Stack.Screen
			name={RouterKeys.FAQ}
			component={Faq}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name={RouterKeys.SUPPORT}
			component={Support}
			options={{ header: ProfileHeader }}
		/>
	</>
);
