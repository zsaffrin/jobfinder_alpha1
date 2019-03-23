import axios from 'axios';

async function getWorkingNomadsJobData() {
  const { data } = await axios
    .get('https://www.workingnomads.co/api/exposed_jobs/')
    .catch(err => console.error(err));
  return data;
}

async function getWorkingNomadsJobs() {
  const jobData = await getWorkingNomadsJobData();
  console.info(jobData);
  const formattedJobs = jobData.map(job => ({
    company: job.company_name,
    description: job.description,
    location: job.location,
    remote: null,
    source: 'workingNomads',
    tags: job.tags.split(','),
    title: job.title,
    uniqueId: job.pub_date,
    url: job.url,
    originalRecord: job,
  }));
  const filteredJobs = formattedJobs.filter(job => {
    return (
      job.originalRecord.category_name === 'Development' ||
      job.originalRecord.category_name === 'Customer Success' ||
      job.originalRecord.category_name === 'Management'
    );
  });
  return filteredJobs;
}

export { getWorkingNomadsJobs };
