get_all_resolutions = () => {
    let all = [];
    for (let [key, value] of Object.entries(localStorage)) {
        all.push(JSON.parse(value));
    }
    return all;
}

get_resolution(key) = () => {
    return JSON.parse(localStorage.getItem(key));
}

set_resolution = (value) => {
    let key = value.uuid;
    localStorage.setItem(key, JSON.stringify(value));
}

create_resolution = (name, type, start_date, end_date) => {
    let resolution = {
        name: name,
        type: type,
        start_date: start_date,
        end_date: end_date,
        uuid: uuidv4()
    };
    localStorage.setItem(key, JSON.stringify(resolution));
    return resolution;
}

get_resolution_status = (resolution) => {
    let status = "In Progress";
    let today = new Date();
    if (resolution.start_date > today) {
        status = "Upcoming";
    } else if (resolution.end_date < today) {
        status = "Finished";
    }
    return status;
}

get_resolution_success = (resolution) => {
    let success = false;
    // Some logic to determine if the resolution was successful
    return success
}


update_resolution_json_status_success = (resolution) => {
    resolution.status = get_resolution_status(resolution);
    resolution.success = get_resolution_success(resolution);
    return resolution;
}

update_resolution_status_success = (key) => {
    let resolution = get_resolution(key)
    resolution.status = get_resolution_status(resolution);
    resolution.success = get_resolution_success(resolution);
    set_resolution(resolution);
}