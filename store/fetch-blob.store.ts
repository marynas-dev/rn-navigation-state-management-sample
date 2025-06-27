import {shallow} from 'zustand/shallow';
import {createWithEqualityFn} from 'zustand/traditional';

import {STATUS} from '../../project-health24/shared/services/types';

interface IFetchBlobState {
  status: STATUS;
  setStatus: (value: STATUS) => void;
}

export const useFetchBlobStore = createWithEqualityFn<IFetchBlobState>(set => {
  return {
    status: STATUS.COMPLETED,
    setStatus: (status: STATUS): void => {
      set(() => {
        return {
          status,
        };
      });
    },
  };
}, shallow);
