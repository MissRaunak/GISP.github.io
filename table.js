var datalist = JSON.parse(localStorage.getItem('gisdata') || '[]');
console.log("datalist", datalist)

const tableBody = document.getElementById("table-body");

datalist.forEach(person => {

    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const phone = document.createElement("td");
    const email = document.createElement("td");
    const password = document.createElement("td");
    const address = document.createElement("td");
    const latitude = document.createElement("td");
    const longitude = document.createElement("td");
    nameCell.textContent = person.name;
    phone.textContent = person.mobile;
    email.textContent = person.email;
    password.textContent = person.Password;
    address.textContent = person.Address;
    latitude.textContent = person.latitude;
    longitude.textContent = person.longitude;
    row.appendChild(nameCell);
    row.appendChild(phone);
    row.appendChild(email);
    row.appendChild(password);
    row.appendChild(address);
    row.appendChild(latitude);
    row.appendChild(longitude);
    tableBody.appendChild(row);
});




require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Track",
    "esri/widgets/Home",
    "esri/widgets/Locate",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "dojo/domReady!"
], function (Map, MapView, Home, Locate, Track, Graphic, GraphicsLayer) {
    var map = new Map({
        basemap: "topo" //"arcgis-topographic" 
    });

    var view = new MapView({

        map: map,

        zoom: 10, // Zoom level
        container: "viewDiv"
    });


    var table = document.getElementById("myTable"), rIndex;
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {

            rIndex = this.rowIndex;
            console.log("ojdsh", rIndex);
            // var value1 = document.getElementById("lat").value = this.cells[0].innerHTML;
            // var value2 = document.getElementById("log").value = this.cells[1].innerHTML;
            var value1 = this.cells[5].innerHTML;
            var value2 = this.cells[6].innerHTML;
            console.log("lat", value1); console.log("log", value2)
            var view = new MapView({
                map: map,
                center: [value2, value1],
                zoom: 10, // Zoom level
                container: "viewDiv"
            });

            //Create a point
            const graphicsLayer = new GraphicsLayer();
            map.add(graphicsLayer);
            const point = {
                type: "point",
                longitude: value2,
                latitude: value1

            };
            console.log("point", point)
            const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [137, 207, 240],  // Orange
                outline: {
                    color: [238, 75, 43], // White
                    width: 1
                }
            };
            const pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });
            graphicsLayer.add(pointGraphic);

            //home
            let home = new Home({
                view: view
            });
            view.ui.add(home, "top-right");

        };
    }



});