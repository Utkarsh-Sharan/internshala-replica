import { create } from "zustand";

export const useFilterStore = create((set, get) => ({
    isFilterModalVisible: false,

    toggleFilterModal: (value) => {
        set({isFilterModalVisible: value});
    }
}));