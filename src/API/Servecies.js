const axios = require("axios");
const apiURL = 'https://password-generator-and-checker.p.rapidapi.com/generator/strong'
export const options = {
    method: 'GET',
    url: apiURL,
    params: {
        strict: 'true',
        lowercase: 'false',
        uppercase: 'false',
        numbers: 'false',
        symbols: 'false',
        length: null,
    },
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'password-generator-and-checker.p.rapidapi.com'
    }
};
