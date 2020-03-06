fetch("http://localhost:3000/trails")
  .then(response => response.json())
  .then(trails => {
    trails.map(trail => {
    //   console.log(trail)
      let marker = L.marker([trail.latitude, trail.longitude])
        .addTo(mymap)
        .bindPopup(
            `
                <a href ='http://localhost:3001/trail.html'>
                    ${trail.name} - ${trail.distance}miles
                </a>
            `
        )
        .openPopup();
    });
  });

var mymap = L.map("mapid").setView([39.76897, -104.97425], 6);

var Stamen_TerrainBackground = L.tileLayer(
	"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}",
	{
		attribution:
			'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: "abcd",
		minZoom: 0,
		maxZoom: 18,
		ext: "png"
	}
).addTo(mymap);