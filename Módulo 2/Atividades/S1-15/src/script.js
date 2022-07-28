const jobs = [
  { stack: "Frontend", salary: "7.000", contract: "PJ" },
  { stack: "Backend", salary: "3.500", contract: "CLT" },
  { stack: "Backend", salary: "5.500", contract: "PJ" },
  { stack: "Frontend", salary: "4.100", contract: "CLT" },
  { stack: "Frontend", salary: "3.800", contract: "PJ" },
  { stack: "Backend", salary: "6.900", contract: "CLT" },
  { stack: "Frontend", salary: "5.000", contract: "CLT" },
];

function convertSalary(salary) {
  const numberSalary = (+salary * 1000).toFixed();
  return numberSalary;
}

function getCltJobs() {
  const clt = jobs.filter((job) => {
    return job.contract === "CLT";
  });
  return clt;
}
getCltJobs();

function getPjJobs() {
  const pj = jobs.filter((job) => {
    return job.contract === "PJ";
  });
  return pj;
}
getPjJobs();

function getAboveFiveThousand() {
  const AboveFiveThousand = jobs.filter((job) => {
    const salary = convertSalary(job.salary);
    return salary > 5000;
  });
  return AboveFiveThousand;
}
getAboveFiveThousand();

function getUntilFiveThousand() {
  const untilFive = jobs.filter((job) => {
    const salary = convertSalary(job.salary);
    return salary <= 5000;
  });
  return untilFive;
}
getUntilFiveThousand();

function getBetweenFourAndSix() {
  const betweenSalary = jobs.filter((job) => {
    const salary = convertSalary(job.salary);
    if (salary >= 4000 && salary <= 6000) {
      return salary;
    }
  });
  return betweenSalary;
}
getBetweenFourAndSix();

function getBackendJobs() {
  const backendJobs = jobs.filter((jobs) => {
    return jobs.stack === "Backend";
  });
  return backendJobs;
}
getBackendJobs();

function getFrontendJobs() {
  const frontEnd = jobs.filter((jobs) => {
    return jobs.stack === "Frontend";
  });
  return frontEnd;
}
getFrontendJobs();
