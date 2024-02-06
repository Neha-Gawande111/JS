let temperatureSensor={
                        currentTemperature :"18 C" ,
}
console.log("currentTemperature is 18 Degree Celcius");

 if (temperatureSensor.currentTemperature >=40) {
    console.log("It's Sunny whether Today");
    
 } 
 else if(temperatureSensor.currentTemperature>=30) {
    console.log("It's mostly cloudy Today");
 }
 else if(temperatureSensor.currentTemperature>=20){
    console.log("Expected rain today");
 }
 else{
    console.log("It's Rain");
 };