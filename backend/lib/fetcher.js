import { getCodepenJobs } from './codepen';
import { getWorkingNomadsJobs } from './workingnomads';

async function getAllJobs() {
  const codepenJobs = await getCodepenJobs();
  const workingNomadsJobs = await getWorkingNomadsJobs();

  return [...codepenJobs, ...workingNomadsJobs];
}

export { getAllJobs, getCodepenJobs, getWorkingNomadsJobs };
