import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import noticeMsg from './js/pnotify.js';
import { refs } from './js/refs.js';
import oneCountryCardTpl from './templates/fetch-one-country.hbs';
import fewCountryCardTpl from './templates/fetch-few-countries.hbs';
const debounce = require('lodash.debounce');

refs.input.addEventListener(
    'input',
    debounce((e) => {
        renderPage(e.target.value);
    }, 500),
);

function renderPage(name) {
    fetchCountries(name)
        .then(countries => {
            if (countries.length === 1) {
                refs.countryBox.innerHTML = oneCountryCardTpl(countries[0]);
            } else if (countries.length > 2 && countries.length <= 10) {
                refs.countryBox.innerHTML = fewCountryCardTpl(countries);
            } else {
                noticeMsg("Too many matches found. Please enter a more specific query!");
                refs.countryBox.innerHTML = null;
            };
        })
        .catch((error) => {
            console.log(error);
        });
};
