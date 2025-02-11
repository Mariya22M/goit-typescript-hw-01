import axios from 'axios';
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
    }
}
const url = 'https://api.example.com/data';
fetchData(url)
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.error(error);
});
