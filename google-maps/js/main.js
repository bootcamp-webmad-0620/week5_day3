// // Mapa básico
// initMap = () => {

//     let mapOptions = {
//         center: directions.ironhackBCN.coords,
//         zoom: 15,
//         styles: mapStyles.aubergine
//     }

//     const myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions)


//     let markerOptions = {
//         position: directions.ironhackBCN.coords,
//         map: myMap,
//         title: directions.ironhackBCN.title
//     }

//     new google.maps.Marker(markerOptions)
// }





// // Geolocalización
// initMap = () => {

//     let mapOptions = { center: directions.ironhackBCN.coords, zoom: 15, styles: mapStyles.aubergine }
//     const myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions)

//     let markerOptions = { position: directions.ironhackBCN.coords, map: myMap }
//     new google.maps.Marker(markerOptions)

//     if (navigator.geolocation) {

//         // navigator.geolocation.getCurrentPosition(successFn, errorFn)
//         // // argumento 1: función de éxito (coordendaas como parámetro por defecto)
//         // // argumento 2: función de fracaso (error como parámetro por defecto)

//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 console.log("La posición es:", position)
//                 const currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude }
//                 myMap.setCenter(currentPosition)

//                 markerOptions = { position: currentPosition, map: myMap }
//                 new google.maps.Marker(markerOptions)

//             },
//             error => console.error("No se puedo rescatar la localización:", error)
//         )


//     } else {
//         console.error("El navegador no dispone de geolocalizador")
//     }
// }




initMap = () => {

    let mapOptions = { center: directions.ironhackBCN.coords, zoom: 15, styles: mapStyles.night }
    const myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)

    // Detalles de la ruta    
    const directionRequest = {
        origin: directions.ironhackBCN.coords,
        destination: 'Fabrik, Madrid, ES',
        travelMode: 'DRIVING'
    }

    const directionsService = new google.maps.DirectionsService

    directionsService.route(
        directionRequest,
        (response, status) => {
            console.log('El estado de la petición a directonsSevice ha sido:', status)
            console.log('La respuesta del directonsSevice ha sido:', response)

            const directionsDisplay = new google.maps.DirectionsRenderer
            directionsDisplay.setDirections(response)
            directionsDisplay.setMap(myMap)
        }
    )
}