const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0])
    const countryHTML = countries.map(country => getCountryHTML(country));
    console.log(countryHTML)
}

const getCountryHTML = country => {
    return `
    <div>
    <h2>${country.name}</h2>
    <h3>${country.capital}</h3>
    <img src= "${country.flag}">
    </div>
    `
}

loadCountries()
