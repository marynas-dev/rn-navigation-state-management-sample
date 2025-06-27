import {shallow} from 'zustand/shallow';
import {createWithEqualityFn} from 'zustand/traditional';

import {
  Area,
  MetroStation,
  Nearby,
  Region,
  Settlement,
} from '../../project-health24/services/location/location.types';

interface ILocationState {
  settlement: Settlement | null;
  metroStation: MetroStation | null;
  area: Area | null;
  region: Region | null;
  nearby: null | Nearby;

  setSettlement: (settlement: Settlement) => void;
  setMetroStation: (metroStation: MetroStation) => void;
  setArea: (area: Area) => void;
  setRegion: (region: Region) => void;
  setNearby: (nearby: Nearby | null) => void;

  resetSettlement: () => void;
  resetMetroStation: () => void;
  resetArea: () => void;
  resetRegion: () => void;
  resetLocation: () => void;
  resetNearby: () => void;
}

export const useLocationStore = createWithEqualityFn<ILocationState>(set => {
  return {
    settlement: null,
    metroStation: null,
    area: null,
    region: null,
    nearby: null,

    setSettlement: (settlement: Settlement): void => {
      set(() => {
        return {
          settlement,
        };
      });
    },
    setMetroStation: (metroStation: MetroStation): void => {
      set(() => {
        return {
          metroStation,
        };
      });
    },
    setArea: (area: Area): void => {
      set(() => {
        return {
          area,
        };
      });
    },
    setRegion: (region: Region): void => {
      set(() => {
        return {
          region,
        };
      });
    },
    setNearby: (nearby: Nearby | null): void => {
      set(() => {
        return {
          nearby,
        };
      });
    },

    resetSettlement: (): void => {
      set(() => {
        return {
          settlement: null,
        };
      });
    },
    resetMetroStation: (): void => {
      set(() => {
        return {
          metroStation: null,
        };
      });
    },
    resetArea: (): void => {
      set(() => {
        return {
          area: null,
        };
      });
    },
    resetRegion: (): void => {
      set(() => {
        return {
          region: null,
        };
      });
    },

    resetNearby: (): void => {
      set(() => {
        return {
          nearby: null,
        };
      });
    },

    resetLocation: (): void => {
      set(() => {
        return {
          settlement: null,
          metroStation: null,
          area: null,
          region: null,
          nearby: null,
        };
      });
    },
  };
}, shallow);
