import axios from "axios";

let url = "https://covid19.mathdro.id/api";

export const GetCases = async () => {
  let {
    data: { confirmed, deaths, recovered, lastUpdate },
  } = await axios.get(url);

  return { confirmed, deaths, recovered, lastUpdate };
};
