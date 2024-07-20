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
    departmentId: "60b8d295f1",
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
const dateFormat = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};
const ProfileAI = () => {
  return (
    <div>
      <div className="max-h-[110vh]">

        <div className="mb-3 border shadow sm:p-4 sm:pl-8 p-2 rounded">
          <h2 className="text-2xl font-bold text-blue-600">Personal Information</h2>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-3/4 text-gray-600">Name:</span>
            <span className="sm:w-2/3 w-full">
              {profile.personal.name.firstName} {profile.personal.name.lastName}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-3/4  text-gray-600">Date of Birth:</span>
            <span className="sm:w-2/3 w-full">{dateFormat(profile.personal.dob)}</span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3  w-3/4 text-gray-600">Gender:</span>
            <span className="sm:w-2/3 w-full">{profile.personal.gender}</span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-3/4 text-gray-600">Contact:</span>
            <span className=" sm:w-2/3 w-full">
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
            <span className="sm:w-1/3 w-3/4 text-gray-600">Address:</span>
            <span className="sm:w-2/3 w-full">{profile.personal.address}</span>
          </div>
        </div>

        <div className="mb-3 border shadow sm:p-4 sm:pl-8 p-2 rounded">
          <h2 className="text-2xl font-bold text-blue-600">Professional Information</h2>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-3/4 text-gray-600">Department ID:</span>
            <span className="sm:w-2/3 w-full">{profile.professional.departmentId}</span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-3/4 text-gray-600">Designation:</span>
            <span className="sm:w-2/3 w-full">{profile.professional.designation}</span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-3/4 text-gray-600">Date of Joining:</span>
            <span className="sm:w-2/3 w-full">
              {dateFormat(profile.professional.joinedAt)}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-3/4 text-gray-600">Employment Type:</span>
            <span className="sm:w-2/3 w-full">{profile.professional.employmentType}</span>
          </div>
        </div>

        <div className="mb-3 border shadow sm:p-4 sm:pl-8 p-2 rounded ">
          <h2 className="text-2xl font-bold  text-blue-600">Experience Information</h2>
          {profile.experience.map((experience, index) => (
            <div key={index} className="mb-4">
              <h3 className="sm:text-lg text-md mt-3 mb-3 font-bold mb-1">
                {experience.company} (
                {dateFormat(experience.duration.startDate)} -{" "}
                {dateFormat(experience.duration.endDate)})
              </h3>
              <div className="flex mb-2">
                <span className="sm:w-1/3 w-3/4 text-gray-600">Job Title:</span>
                <span className="sm:w-2/3 w-full">{experience.jobTitle}</span>
              </div>
              <div className="flex  mb-2">
                <span className="sm:w-1/3 w-3/4 text-gray-600">Job Description:</span>
                <span className="sm:w-2/3 w-full">{experience.responsibilities}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:mb-3 border shadow sm:p-4 sm:pl-8 p-2 rounded">
          <h2 className="text-2xl font-bold  text-blue-600">Education Information</h2>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-2/3 text-gray-600">Qualification:</span>
            <span className="sm:w-2/3 w-full">
              {profile.education.highestQualification}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-2/3 text-gray-600">University:</span>
            <span className="sm:w-2/3 w-full">{profile.education.university}</span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-2/3 text-gray-600">Year of Passing:</span>
            <span className="sm:w-2/3 w-full">
              {dateFormat(profile.education.yearOfPassing)}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="sm:w-1/3 w-2/3 text-gray-600">Specialization:</span>
            <span className="sm:w-2/3 w-full">{profile.education.specialization}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAI;
