require 'pry'

Trail.destroy_all

json_trails = RestClient.get "https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=100&maxResults=500&key=108775232-e2313669e004bbe471063bae6fe7d2f6"
parsed_trails = JSON.parse(json_trails)
parsed_trails["trails"].map do |trail|
  Trail.create(  
    name: trail["name"],
    summary: trail["summary"],
    difficulty: trail["difficulty"],
    location: trail["location"],
    rating: trail["stars"],
    distance: trail["length"],
    latitude: trail["latitude"],
    longitude: trail["longitude"]
  )  
end 