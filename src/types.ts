export interface Activity {
  id?: number;
  title?: string | null;
  dueDate?: string;
  completed?: boolean;
}

export interface Tourist {
  id?: number;
  tourist_name?: string;
  tourist_email?: string;
  tourist_profilepicture?: string;
  tourist_location?: string;
  createdat?: Date;
}

export interface TouristPage {
  page: number;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: Tourist[];
}
