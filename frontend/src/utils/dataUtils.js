export async function loadJobs() {
  return await fetch('http://localhost:4382/api/jobs')
    .then(async res => {
      return await res.json();
    })
    .catch(err => {
      throw new Error(err);
    });
}
