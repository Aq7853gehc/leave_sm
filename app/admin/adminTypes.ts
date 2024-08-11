export interface RequestEmployeeType {
  id: number;
  name: string;
  email: string;
  city: string;
  role: string;
  status: "Active" | "Inactive";
  action: JSX.Element[];
}

export interface TableColumnType {
  Header: string;
  accessor: string;
  className: string;
  Cell?: any;
}

export interface LeaveTypeReqeuest {
  id: number;
  name: string;
  daysPerYear: number;
  description: string;
  action: JSX.Element[];
}

export interface RequestHistory {
  id: number;
  employee: string;
  startDate: string;
  endDate: string;
  reason: string;
  duration:number;
  status: "PENDING" | "APPROVED" | "REJECTED";
}
