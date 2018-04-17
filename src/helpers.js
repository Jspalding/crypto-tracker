//Fetch error helper
export const fetchResponseHandler = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}

