fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = (countries) => {
    countries.forEach(country => {
        const countriesDiv = document.getElementById("countries");
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";
    
        const countryInfo =`
         <h3 class="country-name">${country.name}</h3>
         <p class="country-capital">${country.capital}</p>
         <button onclick='displayCountryDetail("${country.name}")'>Show Details</button>
        `;
        
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
  .then(res => res.json())
  .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = (country) => {
   const countryDiv = document.getElementsByClassName("country-detail");
   countryDiv.innerHTML = `
     <h1>Name:${country.name}</h1>
     <p>Population:${country.population}</p>
     <p>Area:${country.area}</p>
     <p>Region:${country.region}</p>
     <img src="${country.flag}"></img>
   `
}

//    for (let i = 0; i < countries.length; i++){
//        const country = countries[i];
//        const countriesDiv = document.getElementById("countries");
//        const countryDiv = document.createElement("div");
//        countryDiv.className = "country";
   
//        const countryInfo =`
//         <h3 class="country-name">${country.name}</h3>
//         <p class="country-capital">${country.capital}</p>
//        `;
       
//        countryDiv.innerHTML = countryInfo;
//        countriesDiv.appendChild(countryDiv);
//    }
