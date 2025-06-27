import {Dayjs} from 'dayjs';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {DiagnosticReportDetails} from '../services/diagnostic-reports/diagnostic-reports.types';
import {
  LabOrderDetails,
  ResultTest,
} from '../services/lab-orders/lab-orders.types';
import {
  Assignment,
  PrescriptionDetails,
} from '../services/prescriptions/prescriptions.types';
import type {ProcedureExt} from '../services/procedures/procedures.types';
import type {ResearchExt} from '../services/research/research.types';
import {Address, Schedule} from '../services/search/search.types';
import type {VaccinationProtocol} from '../services/vaccination/vaccination.types';
import {RouterKeys} from './keys';

export enum AppointmentServicesType {
  ACTION = 'action',
  MEDICAL_SERVICES = 'medical_services',
  SERVICE_REFERENCES = 'service_references',
}

export type RootStackParamList = {
  [RouterKeys.SEARCH]: undefined;
  [RouterKeys.LOGIN]: undefined;
  [RouterKeys.FAQ]: undefined;
  [RouterKeys.SUPPORT]: undefined;
  [RouterKeys.PROFILE_SETTINGS]: undefined;
  [RouterKeys.LOCATION]: undefined;
  [RouterKeys.PROFILE_SETTINGS_PHONE_NUMBER]: undefined;
  [RouterKeys.ADD_CONNECTED_PERSON]: {
    phoneNumberScreenTitle?: string | undefined;
    phoneNumber?: string | undefined;
  };
  [RouterKeys.ADD_CONNECTED_PERSON_PHONE_NUMBER]: {
    phoneNumberScreenTitle?: string | undefined;
    phoneNumber?: string | undefined;
  };
  [RouterKeys.CONFIRM_CONNECTED_PERSON_PHONE_NUMBER]: {
    phoneNumberScreenTitle?: string | undefined;
    phoneNumber?: string | undefined;
  };
  [RouterKeys.EDIT_CONNECTED_PERSON]: {
    connectedPersonId: string | number;
    phoneNumberScreenTitle?: string | undefined;
    phoneNumber?: string | undefined;
    newConnectedPerson?: string | number;
    formType?: 'edit' | 'requestAccess';
    isAccessRequested?: boolean;
  };
  [RouterKeys.EDIT_CONNECTED_PERSON_PHONE_NUMBER]: {
    connectedPersonId: string | number;
    phoneNumberScreenTitle?: string | undefined;
    phoneNumber?: string | undefined;
    newConnectedPerson?: string | number;
    formType?: 'edit' | 'requestAccess';
    isAccessRequested?: boolean;
  };
  [RouterKeys.EDIT_CONTACT_DATA]: {formType?: 'edit' | 'add'};
  [RouterKeys.SCHEDULE_APPOINTMENT]: {
    address?: Address | null;
    schedule?: Schedule;
    type: 'employee' | 'division';
    divisionInternalId?: string | number;
    employeeInternalId?: string | number;
    doctorName?: string;
    divisionName?: string;
    doctorPosition?: string;
  };
  [RouterKeys.PROFILE_SETTINGS_PERSONAL_DATA]: undefined;
  [RouterKeys.PROFILE_SETTINGS_PASSWORD]: undefined;
  [RouterKeys.REGISTER]: undefined;
  [RouterKeys.REVIEW]: {
    type: 'employee' | 'division' | 'medicalFacility';
    idDoctor?: string | number;
    idDivision?: string | number;
    idMedicalFacility?: string | number;
    divisionName?: string;
    doctorName?: string;
    medicalFacilityName?: string;
  };
  [RouterKeys.PASSWORD_RECOVERY]: {resetPasswordToken: string; login: string};
  [RouterKeys.PASSWORD_RECOVERY_OTP]: undefined;
  [RouterKeys.GENERAL]: NavigatorScreenParams<HomeTabParamList>;
  [RouterKeys.DOCTOR_EXAMINATION]: {id: string | number};
  [RouterKeys.REFERRAL_DETAILS]: {id: string | number};
  [RouterKeys.LAB_TEST_DETAILS]: {id: number | string; testType: string};
  [RouterKeys.LAB_TEST_RESEARCH]: {id: number | string; testType: string};
  [RouterKeys.PROCEDURE_RESULTS]: {item: ProcedureExt};
  [RouterKeys.RESEARCH_RESULTS]: {
    id?: string | number;
    serviceOrderId?: string | number;
    data?: DiagnosticReportDetails | ResearchExt;
    labOrder?: LabOrderDetails | undefined;
  };
  [RouterKeys.INDICATOR_DETAILS]: {data: ResultTest};
  [RouterKeys.OBSERVATION_DETAILS]: {
    id?: string | number;
    encounterId?: string | number;
  };
  [RouterKeys.DIAGNOSES]: {id: string | number};
  [RouterKeys.VACCINATION_DETAILS]: {
    id?: string | number;
    encounterId?: string | number;
  };
  [RouterKeys.VACCINATION_PROTOCOLS]: {protocol: VaccinationProtocol};
  [RouterKeys.PROCEDURE_DETAILS]: {
    id?: string | number;
    encounterId?: string | number;
  };
  [RouterKeys.INFORMATION_SOURCE]: {title?: string; description: string | null};
  [RouterKeys.PRESCRIPTION_DETAILS]: {id: string | number};
  [RouterKeys.RECOMMENDATION_DETAILS]: {id: string | number};
  [RouterKeys.MEDICINE_DETAILS]: {id: string | number};
  [RouterKeys.APPOINTMENT_DETAILS]: {
    id: string | number;
    anamnesisCount?: number;
    objectiveExaminationsCount?: number;
  };
  [RouterKeys.EXAMINATION]: {id: string | number};
  [RouterKeys.APPOINTMENT_SERVICES]: {
    id: string | number;
    types: AppointmentServicesType[];
  };
  [RouterKeys.PRESCRIPTION_MEDICINES]: {
    medicine: Assignment;
    data: PrescriptionDetails | undefined;
    screen: string;
  };
  [RouterKeys.RESEARCH_DETAILS]: {id: string | number};
  [RouterKeys.VISIT_RESULTS]: {data: number[]};
  [RouterKeys.EXAMINATION_RESULTS]: {id: string | number};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  [RouterKeys.HOME]: NavigatorScreenParams<SearchStackScreens>;
  [RouterKeys.MY_DOCTOR]: undefined;
  [RouterKeys.MEDICAL_CARD]: NavigatorScreenParams<MedicalStackScreens>;
  [RouterKeys.OTHER]: undefined;
};

export type MedicalStackScreens = {
  [RouterKeys.MAIN]: undefined;
  [RouterKeys.PRESCRIPTIONS]: undefined;
  [RouterKeys.REFERRAL]: undefined;
  [RouterKeys.MEDICAL_HISTORY]: undefined;
  [RouterKeys.LAB_ANALYSIS]: undefined;
  [RouterKeys.VACCINATION]: undefined;
  [RouterKeys.DOCTOR_APPOINTMENT]: undefined;
};

export type SearchStackScreens = {
  [RouterKeys.SEARCH_HOME]: {type?: string; id?: string};
  [RouterKeys.SEARCH_DOCTORS]: undefined;
  [RouterKeys.SEARCH_ORGANIZATION]: undefined;
  [RouterKeys.MEDICAL_FACILITY_DETAILS]: {
    id: string | number;
    previousPage?: string;
  };
  [RouterKeys.DOCTOR_DETAILS]: {id: string | number; previousPage?: string};
  [RouterKeys.AFFILIATE]: {id: string | number; previousPage?: string};
  [RouterKeys.DOCTOR_SCHEDULE]: {
    id: string | number;
    date?: string | Dayjs;
    internalId: string | number;
    previousPage?: string;
  };
  [RouterKeys.AFFILIATE_SCHEDULE]: {
    internalId: string | number;
    address: Address;
    divisionName: string;
  };
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
