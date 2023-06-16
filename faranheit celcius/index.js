while (true) {
    let faranheithOrCelcius = prompt("1-Fahrenheit to Celsius\n2-Celsius to Fahrenheit");
    let faranheith;
    let celcius;
  
    if (faranheithOrCelcius === "1") {
      faranheith = prompt("Enter the temperature in Fahrenheit:");
      celcius = (faranheith - 32) * 5 / 9;
      alert(`${faranheith}°F = ${celcius}°C`);
    } else if (faranheithOrCelcius === "2") {
      celcius = prompt("Enter the temperature in Celsius:");
      faranheith = celcius * 9 / 5 + 32;
      alert(`${celcius}°C = ${faranheith}°F`);
    } else {
      alert("Please enter the correct number.");
    }
  
    let playAgain = prompt("Do you want to convert another temperature? (yes/no)");
    if (playAgain.toLowerCase() !== "yes") {
      break;
    }
  }
      
