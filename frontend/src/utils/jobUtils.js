export async function loadJobs() {
  return await fetch('http://localhost:4382/api/jobs')
    .then(async res => {
      const { jobs, sources } = await res.json();
      return { jobs, sources };
    })
    .catch(err => {
      throw new Error(err);
    });
}
