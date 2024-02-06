const weatherApp = {
    temperature: 41, // in Fahrenheit
    humidity: 50, // in percentage
    conditions: "partly cloudy", // Weather conditions
  
    getClothingRecommendation: function () 
    {
      console.log("Wear something appropriate for the weather: ");
        if (this.temperature >= 40) 
        {
        console.log("Light clothing and sunglasses.");
        } 
        else if (this.temperature >= 30) 
        {
        console.log("A light jacket or sweater.");
        } 
        else if (this.temperature >= 20)
        {
        console.log("A warm jacket and layers.");
        }
        else{
            console.log("Carry umbrella or raincoat it may be raining today");
        }
      },
  };
  
  // Example usage:
  weatherApp.getClothingRecommendation();
  