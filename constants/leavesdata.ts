export async function getData(): Promise<LeavesHistory[]> {
  return [
    {
      id: "1",
      type: "Sick Leave",
      status: "approved",
      startdate:"2023-05-01",
      enddate:"20223-05-05",
      duration:5
    },
  ];
}
