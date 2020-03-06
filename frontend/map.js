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
                    <span style="display:block">\n\nTrail Conditions: ${trailConditionRandomizer()}</span>
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

let emojiArray = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
    0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
    0x1F431, 0x1F42A, 0x1F439, 0x1F424]

function makeEmoji(array){
    let newArray = []
    array.map(emoji=>{
        newArray.push(String.fromCodePoint(emoji))
    })
    return newArray
}

function trailConditionRandomizer (){
    return makeEmoji(emojiArray)[Math.floor(Math.random() * Math.floor(makeEmoji(emojiArray).length))]
    // return conditionArray[Math.floor(Math.random() * Math.floor(5))]
}