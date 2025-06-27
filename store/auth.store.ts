import {shallow} from 'zustand/shallow';
import {createWithEqualityFn} from 'zustand/traditional';

interface IAuthState {
  token: boolean | string;
  setToken: (value: boolean | string) => void;
}

export const useAuthStore = createWithEqualityFn<IAuthState>(set => {
  return {
    token: false,
    setToken: (token: boolean | string): void => {
      set(() => {
        return {
          token,
        };
      });
    },
  };
}, shallow);
