"use client"

import { useState } from "react"

export default function Predict() {

    const [form, setForm] = useState({
        Age: "",
        Gender: "0",
        BloodType: "0",
        MedicalCondition: "0",
        InsuranceProvider: "0",
        AdmissionType: "0",
        TestResults: "0",
        Medication: "",
        Severity: "0",
        Dosage: ""
    })

    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const outcomeMap = {
        0: "Recovered",
        1: "Improving",
        2: "Stable",
        3: "Critical"
    }

    const handleSubmit = async () => {

        try {

            setLoading(true)

            const res = await fetch("https://healthcare-ai-api.onrender.com/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Age: Number(form.Age),
                    Gender: Number(form.Gender),
                    "Blood Type": Number(form.BloodType),
                    "Medical Condition": Number(form.MedicalCondition),
                    "Insurance Provider": Number(form.InsuranceProvider),
                    "Admission Type": Number(form.AdmissionType),
                    "Test Results": Number(form.TestResults),
                    Medication: Number(form.Medication),
                    Severity: Number(form.Severity),
                    Dosage: Number(form.Dosage)
                })
            })

            const data = await res.json()
            setResult(data)

        } catch (error) {
            console.error(error)
        }

        setLoading(false)
    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center p-6">

            <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-10">


                {/* HEADER */}

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Healthcare AI Predictor
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Predict treatment outcome, hospital stay, and estimated billing.
                    </p>

                </div>


                {/* FORM GRID */}

                <div className="grid grid-cols-2 gap-6">


                    <div>
                        <label className="label">Age</label>
                        <input
                            className="input"
                            placeholder="Patient age"
                            onChange={(e) => setForm({ ...form, Age: e.target.value })}
                        />
                    </div>


                    <div>
                        <label className="label">Gender</label>
                        <select
                            className="select"
                            value={form.Gender}
                            onChange={(e) => setForm({ ...form, Gender: e.target.value })}
                        >
                            <option value="0">Female</option>
                            <option value="1">Male</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">Blood Type</label>
                        <select
                            className="select"
                            value={form.BloodType}
                            onChange={(e) => setForm({ ...form, BloodType: e.target.value })}
                        >
                            <option value="0">A</option>
                            <option value="1">B</option>
                            <option value="2">AB</option>
                            <option value="3">O</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">Medical Condition</label>
                        <select
                            className="select"
                            value={form.MedicalCondition}
                            onChange={(e) => setForm({ ...form, MedicalCondition: e.target.value })}
                        >
                            <option value="0">Diabetes</option>
                            <option value="1">Heart Disease</option>
                            <option value="2">Cancer</option>
                            <option value="3">Asthma</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">Insurance Provider</label>
                        <select
                            className="select"
                            value={form.InsuranceProvider}
                            onChange={(e) => setForm({ ...form, InsuranceProvider: e.target.value })}
                        >
                            <option value="0">Provider A</option>
                            <option value="1">Provider B</option>
                            <option value="2">Provider C</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">Admission Type</label>
                        <select
                            className="select"
                            value={form.AdmissionType}
                            onChange={(e) => setForm({ ...form, AdmissionType: e.target.value })}
                        >
                            <option value="0">Emergency</option>
                            <option value="1">Urgent</option>
                            <option value="2">Routine</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">Test Results</label>
                        <select
                            className="select"
                            value={form.TestResults}
                            onChange={(e) => setForm({ ...form, TestResults: e.target.value })}
                        >
                            <option value="0">Normal</option>
                            <option value="1">Abnormal</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">Medication Code</label>
                        <input
                            className="input"
                            placeholder="Medication ID"
                            onChange={(e) => setForm({ ...form, Medication: e.target.value })}
                        />
                    </div>


                    <div>
                        <label className="label">Severity</label>
                        <select
                            className="select"
                            value={form.Severity}
                            onChange={(e) => setForm({ ...form, Severity: e.target.value })}
                        >
                            <option value="0">Mild</option>
                            <option value="1">Moderate</option>
                            <option value="2">Severe</option>
                        </select>
                    </div>


                    <div>
                        <label className="label">Dosage</label>
                        <input
                            className="input"
                            placeholder="Dosage value"
                            onChange={(e) => setForm({ ...form, Dosage: e.target.value })}
                        />
                    </div>

                </div>


                {/* BUTTON */}

                <button
                    onClick={handleSubmit}
                    className="w-full mt-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition"
                >
                    {loading ? "Running Prediction..." : "Predict"}
                </button>



                {/* RESULT */}

                {result && (

                    <div className="mt-10 border-t pt-6">

                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Prediction Result
                        </h2>

                        <div className="grid grid-cols-3 gap-6">

                            <div className="resultCard">
                                <p className="resultLabel">Outcome</p>
                                <p className="resultValue">{outcomeMap[result.treatment_outcome]}</p>
                            </div>

                            <div className="resultCard">
                                <p className="resultLabel">Billing</p>
                                <p className="resultValue">${result.predicted_billing.toFixed(2)}</p>
                            </div>

                            <div className="resultCard">
                                <p className="resultLabel">Stay</p>
                                <p className="resultValue">{result.predicted_stay} days</p>
                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>

    )
}