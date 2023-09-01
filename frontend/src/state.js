import { create } from "zustand";

export const useAppState = create((set) => ({
  name: "",
  email: "",
  businessName: "",
  accountingProvider: "",
  establishedYear: "",
  loanAmount: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setBusinessName: (businessName) => set({ businessName }),
  setAccountingProvider: (accountingProvider) => set({ accountingProvider }),
  setEstablishedYear: (establishedYear) => set({ establishedYear }),
  setLoanAmount: (loanAmount) => set({ loanAmount }),
}));
