import React from "react";
export const profile = {
  // Personal Information
  personal: {
    title: "Personal Information",
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    dob: "1990-05-15T00:00:00.000Z",
    gender: "male",
    contact: {
      phone: "1667760696",
      email: "kamlesh@gmail.com",
    },
    address: "1234 Main St, Anytown, USA",
  },

  // Professional Information
  professional: {
    title: "Professional Information",
    departmentId: "60b8d295f1d2a609c814f86b",
    designation: "Software Engineer",
    joinedAt: "2020-06-01T00:00:00.000Z",
    employmentType: "FULL_TIME",
  },

  // Experience Information
  experience: [
    {
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
  ],

  // Education Information
  education: {
    title: "Education Information",
    highestQualification: "Bachelors",
    university: "ABC University",
    yearOfPassing: "2017-05-15T00:00:00.000Z",
    specialization: "Computer Science",
  },

  // Profile Status
  isActive: true,
  role: "REGULAR",
};
const dateFormat = (dateString:string) => {
  return new Date(dateString).toLocaleDateString();
};
const ProfileAI = () => {
  return (
    <div>
      <div className="max-h-[92vh]  overflow-scroll no-scrollbar">
        
        <div className="mb-3 border shadow p-1 rounded px-2">
          <h2 className="text-2xl font-bold text-blue-600">Personal Information</h2>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Name:</span>
            <span className="w-2/3">
              {profile.personal.name.firstName} {profile.personal.name.lastName}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Date of Birth:</span>
            <span className="w-2/3">{dateFormat(profile.personal.dob)}</span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Gender:</span>
            <span className="w-2/3">{profile.personal.gender}</span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Contact:</span>
            <span className=" w-2/3">
              <div
                
                className="text-blue-600 hover:text-blue-900"
              >
                {profile.personal.contact.phone}
              </div>
              <div
                className="text-blue-600 hover:text-blue-900"
              >
                {profile.personal.contact.email}
              </div>
            </span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Address:</span>
            <span className="w-2/3">{profile.personal.address}</span>
          </div>
        </div>

        <div className="mb-3 border shadow p-1 rounded px-2">
          <h2 className="text-2xl font-bold text-blue-600">Professional Information</h2>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Department ID:</span>
            <span className="w-2/3">{profile.professional.departmentId}</span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Designation:</span>
            <span className="w-2/3">{profile.professional.designation}</span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Date of Joining:</span>
            <span className="w-2/3">
              {dateFormat(profile.professional.joinedAt)}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Employment Type:</span>
            <span className="w-2/3">{profile.professional.employmentType}</span>
          </div>
        </div>

        <div className="mb-3 border shadow p-1 rounded px-2 ">
          <h2 className="text-2xl font-bold  text-blue-600">Experience Information</h2>
          {profile.experience.map((experience, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold mb-1">
                {experience.company} (
                {dateFormat(experience.duration.startDate)} -{" "}
                {dateFormat(experience.duration.endDate)})
              </h3>
              <div className="flex mb-2">
                <span className="w-1/3 text-gray-600">Job Title:</span>
                <span className="w-2/3">{experience.jobTitle}</span>
              </div>
              <div className="flex mb-2">
                <span className="w-1/3 text-gray-600">Responsibilities:</span>
                <span className="w-2/3">{experience.responsibilities}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-2 border shadow p-1 rounded px-2">
          <h2 className="text-2xl font-bold  text-blue-600">Education Information</h2>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">HighestQualification:</span>
            <span className="w-2/3">
              {profile.education.highestQualification}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">University:</span>
            <span className="w-2/3">{profile.education.university}</span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Year of Passing:</span>
            <span className="w-2/3">
              {dateFormat(profile.education.yearOfPassing)}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="w-1/3 text-gray-600">Specialization:</span>
            <span className="w-2/3">{profile.education.specialization}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAI;
