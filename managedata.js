/**
 * Clears all data from the local storage.
 */
function clear_all_resolutions() {
    localStorage.clear();
}

/**
 * Stores a resolution in the local storage.
 * @param {Object} value - The resolution object to store. It should have a 'uuid' property which will be used as the key.
 */
function set_resolution (value) {
    let key = value.uuid;
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves all resolutions from the local storage.
 * @returns {Array} An array of resolution objects.
 */
function get_all_resolutions(){
    let all = [];
    for (let [key, value] of Object.entries(localStorage)) {
        all.push(JSON.parse(value));
    }
    return all;
}

/**
 * Retrieves a specific resolution from the local storage.
 * @param {string} key - The key of the resolution to retrieve.
 * @returns {Object} The resolution object associated with the provided key.
 */
function get_resolution(key) {
    return JSON.parse(localStorage.getItem(key));
}

/**
 * Stores a resolution in the local storage.
 * @param {Object} value - The resolution object to store. It should have a 'uuid' property which will be used as the key.
 */
function set_resolution (value) {
    let key = value.uuid;
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Creates a resolution object and stores it in the local storage.
 * @param {string} name - The name of the resolution.
 * @param {string} type - The type of the resolution.
 * @param {Date} start_date - The start date of the resolution.
 * @param {Date} end_date - The end date of the resolution.
 * @returns {Object} - The created resolution object.
 */
function create_resolution (name, type, start_date, end_date) {
    console.log("Creating resolution");
    let resolution = {
        name: name,
        type: type,
        start_date: start_date,
        end_date: end_date,
        uuid: this.crypto.randomUUID()
    };
    localStorage.setItem(resolution.uuid, JSON.stringify(resolution));
    console.log(get_resolution(resolution.uuid))
    console.log()
    console.log(get_all_resolutions())
    
    return resolution;
}

/**
 * Determines the status of a resolution based on its start and end dates.
 * @param {Object} resolution - The resolution object containing start_date and end_date properties.
 * @returns {string} The status of the resolution ("Upcoming", "In Progress", or "Finished").
 */
function get_resolution_status(resolution) {
    let status = "In Progress";
    let today = new Date();
    if (resolution.start_date > today) {
        status = "Upcoming";
    } else if (resolution.end_date < today) {
        status = "Finished";
    }
    return status;
}

/**
 * Determines if the resolution was successful.
 * 
 * @param {any} resolution - The resolution to check.
 * @returns {boolean} - True if the resolution was successful, false otherwise.
 */
function get_resolution_success(resolution) {
    let success = false;
    // Some logic to determine if the resolution was successful
    return success
}
