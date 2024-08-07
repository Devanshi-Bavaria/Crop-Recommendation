from flask import Flask, request, render_template
import numpy as np
import pickle

app = Flask(__name__)

# Load the model from the pickle file
with open('model.pickle', 'rb') as f:
    model = pickle.load(f)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    # Get the form data as a list of floats
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    prediction = model.predict(features)
    return f"The Predicted Crop is {prediction[0]}"

if __name__ == "__main__":
    app.run(debug=True, port=8000)
