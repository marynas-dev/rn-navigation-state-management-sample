import {shallow} from 'zustand/shallow';
import {createWithEqualityFn} from 'zustand/traditional';

export enum SelectorScreen {
  Detail = 'detail',
  EncounterList = 'encounterList',
}

export enum AuthScreen {
  Auth = 'auth',
  MFA = 'twoFactorAuthentication',
}

export enum PasswordRecoveryOtpScreen {
  PhoneNumber = 'phoneNumber',
  Otp = 'otp',
}

export enum RegisterScreen {
  FirstStep = 'firstStep',
  SecondStep = 'secondStep',
  ThirdStep = 'thirdStep',
  FourthStep = 'fourthStep',
}

export enum LocationScreen {
  General = 'General',
  Region = 'Region',
  Settlement = 'Settlement',
  Area = 'Area',
  MetroStations = 'MetroStations',
}

interface IScreensState {
  registerScreen: RegisterScreen;
  vaccinationScreen: SelectorScreen;
  procedureScreen: SelectorScreen;
  appointmentDetail: SelectorScreen;
  observationScreen: SelectorScreen;
  authScreen: AuthScreen;
  passwordRecoveryOtpScreen: PasswordRecoveryOtpScreen;
  locationScreen: LocationScreen;

  setLocationScreen: (screen: LocationScreen) => void;
  setVaccinationScreens: (screen: SelectorScreen) => void;
  setRegisterScreens: (screen: RegisterScreen) => void;
  setPasswordRecoveryOtpScreen: (screen: PasswordRecoveryOtpScreen) => void;
  setProcedureScreen: (screen: SelectorScreen) => void;
  setAppointmentDetailsScreens: (screen: SelectorScreen) => void;
  setObservationScreen: (screen: SelectorScreen) => void;
  setAuthScreen: (screen: AuthScreen) => void;
}

export const useScreensStore = createWithEqualityFn<IScreensState>(set => {
  return {
    registerScreen: RegisterScreen.FirstStep,
    vaccinationScreen: SelectorScreen.Detail,
    procedureScreen: SelectorScreen.Detail,
    appointmentDetail: SelectorScreen.Detail,
    observationScreen: SelectorScreen.Detail,
    authScreen: AuthScreen.Auth,
    passwordRecoveryOtpScreen: PasswordRecoveryOtpScreen.PhoneNumber,
    locationScreen: LocationScreen.General,

    setLocationScreen: (locationScreen: LocationScreen): void => {
      set(() => {
        return {
          locationScreen,
        };
      });
    },
    setRegisterScreens: (registerScreen: RegisterScreen): void => {
      set(() => {
        return {
          registerScreen,
        };
      });
    },
    setProcedureScreen: (procedureScreen: SelectorScreen): void => {
      set(() => {
        return {
          procedureScreen,
        };
      });
    },
    setPasswordRecoveryOtpScreen: (
      passwordRecoveryOtpScreen: PasswordRecoveryOtpScreen,
    ): void => {
      set(() => {
        return {
          passwordRecoveryOtpScreen,
        };
      });
    },
    setVaccinationScreens: (vaccinationScreen: SelectorScreen): void => {
      set(() => {
        return {
          vaccinationScreen,
        };
      });
    },
    setAppointmentDetailsScreens: (appointmentDetail: SelectorScreen): void => {
      set(() => {
        return {
          appointmentDetail,
        };
      });
    },
    setObservationScreen: (observationScreen: SelectorScreen): void => {
      set(() => {
        return {
          observationScreen,
        };
      });
    },
    setAuthScreen: (authScreen: AuthScreen): void => {
      set(() => {
        return {
          authScreen,
        };
      });
    },
  };
}, shallow);
