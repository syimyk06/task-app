import { configureStore } from "@reduxjs/toolkit";
import proceduresReducer, { IProcedure } from "@/api/procedure/procedureSlice"; // Ensure this path is correct
import axios from "axios";

async function fetchInitialData() {
  const response = await axios.get(
    "http://195.38.161.55:5005/direction/807f678f-b5a6-4c60-ae67-69be4da31a31"
  );
  const services = response.data.services;
  return services.map((service: IProcedure) => ({
    ...service,
    checked: false,
  }));
}

// Create a synchronous store for type definitions
const store = configureStore({
  reducer: {
    procedures: proceduresReducer,
  },
});

// Define RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

async function initializeStore() {
  const initData = await fetchInitialData();

  const initializedStore = configureStore({
    reducer: {
      procedures: proceduresReducer,
    },
    preloadedState: {
      procedures: {
        procedures: initData,
      },
    },
  });

  return initializedStore;
}

export default initializeStore;
