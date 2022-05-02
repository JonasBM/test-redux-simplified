import { Activity, Tourist, TouristPage } from "./types";

import { CRUDAction } from "redux-simplified";

const baseurl = "https://fakerestapi.azurewebsites.net/api/v1";

export const ActivityCRUDAction = new CRUDAction<Activity>(
  "activities",
  `${baseurl}/Activities/`
);

const baseurlPaginated = "http://restapi.adequateshop.com/api";

export const TouristCRUDAction = new CRUDAction<Tourist, TouristPage>(
  "tourist",
  `${baseurlPaginated}/Tourist/`,
  { paginated: true, paginatedArrayName: "data" }
);
