import {shallow} from 'zustand/shallow';
import {createWithEqualityFn} from 'zustand/traditional';

import {Declaration, User} from '../../project-health24/services/account/account.types';
import {FamilyMember} from '../../project-health24/services/family-members/family-members.types';

interface IUserState {
  user: User | null;
  declaration: Declaration | null;
  currentFamilyMember: FamilyMember | null;
  medicalCardUserId: number | string | null;
  setUser: (user: User) => void;
  setDeclaration: (declaration: Declaration) => void;
  setCurrentFamilyMember: (familyMember: FamilyMember) => void;
  changeCurrentFamilyMember: (familyMember: Partial<FamilyMember>) => void;
  setMedicalCardUserId: (id: number | string | null) => void;
}

export const useUserStore = createWithEqualityFn<IUserState>(set => {
  return {
    currentFamilyMember: null,
    user: null,
    declaration: null,
    medicalCardUserId: null,
    setCurrentFamilyMember: (familyMember: FamilyMember): void => {
      set(() => {
        return {
          currentFamilyMember: familyMember,
        };
      });
    },
    setUser: (user: User): void => {
      set(() => {
        return {
          user,
        };
      });
    },
    setDeclaration: (declaration: Declaration): void => {
      set(() => {
        return {
          declaration,
        };
      });
    },
    setMedicalCardUserId: (id: number | string | null): void => {
      set(() => {
        return {
          medicalCardUserId: id,
        };
      });
    },
    changeCurrentFamilyMember: (familyMember: Partial<FamilyMember>): void => {
      set((state: IUserState) => {
        if (state.currentFamilyMember && familyMember) {
          return {
            currentFamilyMember: {
              ...state.currentFamilyMember,
              ...familyMember,
            },
          };
        }
        return state;
      });
    },
  };
}, shallow);
