from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

outcome_model = joblib.load("../models/outcome_model.pkl")
billing_model = joblib.load("../models/billing_model.pkl")
stay_model = joblib.load("../models/stay_model.pkl")

@app.get("/")
def home():
    return {"message":"Healthcare AI API Running"}

@app.post("/predict")
def predict(data: dict):

    df = pd.DataFrame([data])

    outcome_prediction = outcome_model.predict(df)[0]

    billing_prediction = billing_model.predict(df)[0]

    stay_prediction = stay_model.predict(df)[0]

    return {
        "treatment_outcome": int(outcome_prediction),
        "predicted_billing": float(billing_prediction),
        "predicted_stay": int(stay_prediction)
    }