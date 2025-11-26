document.addEventListener('DOMContentLoaded', () => {

    const formatNumber = (num) => new Intl.NumberFormat('pl-PL').format(num);

    const totalCities = cities.length;
    console.log(`Zadanie 1: Liczba wszystkich miast w tablicy: ${totalCities}`);
    console.log('---------------------------------');

    const totalPopulation = cities.reduce((sum, city) => sum + city.people, 0);
    console.log(`Zadanie 2: Całkowita populacja wszystkich miast: ${formatNumber(totalPopulation)} osób`);
    console.log('---------------------------------');

    const firstBigCity = cities.find(city => city.people > 10000);
    console.log('Zadanie 3: Pierwsze miasto z populacją > 10 000:');
    console.log(firstBigCity);
    console.log('---------------------------------');

    const averagePopulation = totalPopulation / totalCities;
    const citiesAboveAverage = cities.filter(city => city.people > averagePopulation);
    
    console.log(`Zadanie 4: Średnia populacja (dla celów porównania): ${formatNumber(Math.round(averagePopulation))} osób`);
    console.log('Miasta z populacją powyżej średniej:');
    citiesAboveAverage.forEach(city => {
        console.log(`- ${city.name} (${formatNumber(city.people)} os.)`);
    });
    console.log('---------------------------------');

    const bigCityNames = cities
        .filter(city => city.people > 10000)
        .map(city => city.name);

    console.log('Zadanie 5: Nazwy miast z populacją > 10 000:');
    console.log(bigCityNames);
    console.log('---------------------------------');

    const bigCitiesCount = cities.filter(city => city.people > 10000).length;
    const smallCitiesCount = totalCities - bigCitiesCount;
    
    let comparisonResult;
    if (bigCitiesCount > smallCitiesCount) {
        comparisonResult = `Więcej jest miast z populacją > 10 000 (Liczba: ${bigCitiesCount})`;
    } else if (smallCitiesCount > bigCitiesCount) {
        comparisonResult = `Więcej jest miast z populacją <= 10 000 (Liczba: ${smallCitiesCount})`;
    } else {
        comparisonResult = `Liczba miast jest równa (Liczba: ${bigCitiesCount})`;
    }

    console.log(`Zadanie 6: Porównanie miast:`);
    console.log(`Miasta > 10 000: ${bigCitiesCount}`);
    console.log(`Miasta <= 10 000: ${smallCitiesCount}`);
    console.log(`Wynik: ${comparisonResult}`);
    console.log('---------------------------------');
});