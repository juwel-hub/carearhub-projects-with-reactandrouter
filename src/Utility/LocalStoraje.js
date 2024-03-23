const getStordJobeApplication = () => {
  const storedJobApplication = localStorage.getItem("job-application");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJbeApplication = (id) => {
  const stordJobApplications = getStordJobeApplication();
  const exists = stordJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    stordJobApplications.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(stordJobApplications)
    );
  }
};
export { saveJbeApplication, getStordJobeApplication };
