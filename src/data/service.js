export const fetchFlights = (fromWhere, toWhere, fromDate, toDate, returnFromDate, returnToDate) => fetch(`https://api.skypicker.com/flights?v=2&locale=en&flyFrom=${fromWhere}&to=${toWhere}&dateFrom=${fromDate}&dateTo=${toDate}&typeFlight=return&returnFrom=${returnFromDate}&returnTo=${returnToDate}`)
            .then(
                response => response.json(),
                error => console.log('An error occured.', error),
            );

export const fetchPlaces = valuePlace => fetch(`https://api.skypicker.com/places?term=${valuePlace}&v=2&locale=en`)
        .then(
            response => response.json(),
            error => console.log('An error occured.', error),
        );
