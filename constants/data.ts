import { constants } from "fs/promises";

export const bal: Balance[] = [
  {
    leaveType: "Casual Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Sick Leaves",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Marriage Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Marriage Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
  {
    leaveType: "Marriage Leave",
    used: 5,
    total: 10,
    text: "taken from this year",
  },
];

export const chart: Chart = {
  labels: ["Pending", "Approved", "Cancel"],
  datasets: [
    {
      label: "Leaves",
      data: [10, 25, 15],
      backgroundColor: ["#fab905", "#15fa05", "#fa0505"],
      hoverOffset: 4,
    },
  ],
};

export const profile = {
  personalInfo: {
    title: "Personal Information",
    fullName: "John Doe",
    dob: "1990-05-15T00:00:00.000Z",
    gender: "male",
    contactNumber: "1667760696",
    email: "kamlesh@gmail.com",
    address: "1234 Main St, Anytown, USA",
  },
  professionalInfo: {
    title: "Professional Information",
    departmentId: "60b8d295f1d2a609c814f86b",
    designation: "Software Engineer",
    dateOfJoining: "2020-06-01T00:00:00.000Z",
    employmentType: "FULL_TIME",
  },
  experienceInfo: {
    title: "Experience Information",
    company: "Tech Corp",
    jobTitle: "Junior Developer",
    duration: {
      startDate: "2018-01-01T00:00:00.000Z",
      endDate: "2020-05-31T00:00:00.000Z",
    },
    responsibilities:
      "Developed web applications and collaborated with cross-functional teams.",
  },
  educationInfo: {
    title: "Education Information",
    highestQualification: "Bachelors",
    university: "ABC University",
    yearOfPassing: "2017-05-15T00:00:00.000Z",
    specialization: "Computer Science",
  },
  isActive: true,
  role: "REGULAR",
};
