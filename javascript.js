function convertTemperature() {
    // Get the input temperature in Celsius
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);

    // Convert Celsius to Fahrenheit
    const fahrenheit = (inputTemp * 9/5) + 32;

    // Display the converted temperature
    document.getElementById("outputTemp").textContent = fahrenheit.toFixed(2);
}