const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1301da0cdf5ca4616d72e663ed1dbbe0`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}