import { handleApply } from "./localDb";

const fetchData = async () => {
    const storedJobs = handleApply();
    const res = await fetch("/jobListings.json");
    const data = await res.json();
    const applyJobs = [];
    for (const id in storedJobs) {
        const singleJob = data.find((item) => item.id === id);
        applyJobs.push(singleJob);
    }
    return applyJobs;
};

export default fetchData;