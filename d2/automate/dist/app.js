// consume data from https://jsonplaceholder.typicode.com/photos
{
    // method to fetch data from an API using generics (no access to API's return structure) and promises
    // using async/await for asynchronous code (non-blocking)
    const fetchPhotos = async () => {
        const ApiEndPointUrl = `https://jsonplaceholder.typicode.com/photos`; // inject variables into string
        try {
            const response = await fetch(ApiEndPointUrl); // get request
            return response.json(); // see Response object documentation
        }
        catch (error) {
            if (error)
                return error;
        }
        finally {
        }
    };
    // exercise the code
    fetchPhotos()
        .then((response) => {
        if (response instanceof Error) {
            console.log('Error');
        }
        else {
            console.log(`We received ${response}`);
        }
    })
        .catch(() => { });
}
export {};
