import { create } from "zustand";
import axios from "axios";

export const useInternshipStore = create((set, get) => ({
    internshipData: {},
    isFilterModalVisible: false,

    toggleFilterModal: (value) => {
        set({isFilterModalVisible: value});
    },

    fetchAllInternships: async () => {
        try {
            const res = await axios.get("https://internshala.com/hiring/search");
            
            set({internshipData: res.data.internships_meta});
        } catch (error) {
            console.error("Failed to fetch internship data!");
        }
    }
}));