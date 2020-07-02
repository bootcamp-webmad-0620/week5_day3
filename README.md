# week5 day3

> Google Maps
>
> Express + Google Maps


## Main Points: Google Maps

El `src` del script de Google Maps inlcuye tanto la API KEY como el callback para la inicialización:
````html
<script src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=CALLBACK_FUNCTION"></script>
````
Un mapa requiere `zoom` y una localización (`center`) para renderizarse:
````javascript
const options = {center: coordinates, zoom: 15}
const mapInstance = new google.maps.Map(document.querySelector('#myMap'), options)
````
Cada marcador en el mapa está representado por un `new google.maps.Marker()`
````javascript
const markerOptions = {position: coordinates, map: mapInstance, title: 'text'}
new google.maps.Marker(markerOptions)
````
La instancia `DirectionsService` retorna información respecto a una ruta, mientras que `DirectionsRenderer` permite renderizarla en un mapa interactivo.
 
 
## Main Points: browser geolocation
El objeto `navigator.geolocation` permite acceder, a través de su método `.getCurrentPosition()`a la geolocalización de un dispositivo:
````javascript
navigator.geolocation.getCurrentPosition(successFn, failureFn)
````

## Main Points: Express + Google Maps

El flujo en un dispositivo cliente que permite visualizar un mapa en una aplicación de Express supone:
 
 1. El cliente interpreta la vista renderizada.
 2. Carga el script `axios.min.js` contenido en la vista.
 2. Carga el script `app.js` contenido en la vista.
 3. Carga la librería de Google Maps.
 4. Siguiendo las instrucciones de `app.js`, inicializa un mapa.
 5. Siguiendo las instrucciones de `app.js`, realiza una petición de Ajax vía Axios a un endpoint (REST) recibiendo un JSON.
 6. Siguiendo las instrucciones de `app.js`, imprime la respuesta del servidor creando un `new Marker` en el mapa por cada localización.
