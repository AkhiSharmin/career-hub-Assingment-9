
const addToJobData = (id) => {
    const jobData = handleApply();
    jobData[id] = 1;
    localStorage.setItem("jobCart", JSON.stringify(jobData));
};

const handleApply = () => {
    let cart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("jobCart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
};
export { handleApply, addToJobData };