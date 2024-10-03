import axios from "axios";
import { IProcedure } from "./procedureSlice";

export const initData: IProcedure[] = [];

async function fetchData() {
  try {
    const response = await axios.get(
      "http://195.38.161.55:5005/direction/807f678f-b5a6-4c60-ae67-69be4da31a31"
    );
    const services = response.data.services;

    initData.push(services);
  } catch (error) {
	console.log("Error ");
  }
}

fetchData();
