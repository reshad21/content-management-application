const cartCounter = (store) => (next) => (action) => {
    console.log("current state is", store.getStore());
    console.log("action types:", action);
    // return;
    return next(action); //jodi aivabe na lakhi tahole action dispatch hobe na
}

export default cartCounter;