import {createWithEqualityFn} from 'zustand/traditional';

interface IPreviewModalState {
  isPreviewModalOpen: boolean;
  setIsPreviewModalOpen: (value: boolean) => void;
}

export const useModalStore = createWithEqualityFn<IPreviewModalState>(set => ({
  isPreviewModalOpen: false,
  setIsPreviewModalOpen: (value: boolean) => set({isPreviewModalOpen: value}),
}));
