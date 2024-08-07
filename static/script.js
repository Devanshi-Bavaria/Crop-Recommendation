// script.js
document.getElementById('cropForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nitrogen = parseInt(document.getElementById('nitrogen').value);
    const phosphorus = parseInt(document.getElementById('phosphorus').value);
    const potassium = parseInt(document.getElementById('potassium').value);
    const temperature = parseInt(document.getElementById('temperature').value);
    const humidity = parseInt(document.getElementById('humidity').value);
    const ph = parseFloat(document.getElementById('ph').value);
    const rainfall = parseInt(document.getElementById('rainfall').value);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = predictCrop(nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall);
});

function predictCrop(nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall) {
    // Dummy logic for crop prediction
    if (nitrogen > 50 && phosphorus > 50 && potassium > 50) {
        return 'Predicted Crop: Wheat';
    } else if (temperature > 30 && humidity > 60) {
        return 'Predicted Crop: Rice';
    } else if (ph < 6) {
        return 'Predicted Crop: Corn';
    } else {
        return 'Predicted Crop: Barley';
    }
}
