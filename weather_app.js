function fetch_weather_data()
        {
            city_name = document.getElementById("city_name").value;
            //This url contain https link and master key of weatherbit API
            url = "https://api.weatherbit.io/v2.0/current?city="+city_name+"&key=3b6eb73885f34e1b8930429eef135c9e";

            httpRequest = new XMLHttpRequest();
            httpRequest.open("GET",url);
            httpRequest.send();

            httpRequest.onreadystatechange = function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    //All data return from weatherbit API is in weather_data variable
                    weather_data = JSON.parse(this.responseText);
                    document.getElementById("temp_text").innerHTML = "Temperature : " + weather_data.data[0].temp + "°C";
                    document.getElementById("desc_text").innerHTML = "Description : " + weather_data.data[0].weather.description;

                    document.getElementById("wind_text").innerHTML = "Wind : " + weather_data.data[0].wind_spd + "m/s";
                    document.getElementById("humidity_text").innerHTML = "Humidity : " + weather_data.data[0].rh + "%";
                }
            }
        }