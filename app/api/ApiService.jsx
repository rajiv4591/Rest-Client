import axios from 'axios';

module.exports = {
    getRequest: function (url, headers) {
        console.log(headers)
        return axios.get(url, headers).then(function (response) {
            return response;
        }, function (error) {
            throw new Error ('There was an error fetching data');
        });
    }
}