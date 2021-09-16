AOS.init();

const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    //console.log(countries[0])
    const container = document.getElementById('countries');
    //map function used to do practice, here foreach will be better solution
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
    //console.log(countryHTML[0])
}

const getCountryHTML = country => {
    return `
    <div class="country">
    <h2>${country.name}</h2>
    <h3>${country.capital}</h3>
    <img data-aos="zoom-in" src= "${country.flag}">
    </div>
    `
}

loadCountries()
