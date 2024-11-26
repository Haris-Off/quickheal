import mongoose, { Schema, Document, Model } from "mongoose";

interface IPatient extends Document {
  name: string;
  email: string;
  password: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

const PatientSchema: Schema<IPatient> = new Schema<IPatient>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    age: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
  }
);

const Patient: Model<IPatient> = mongoose.model<IPatient>(
  "Patient",
  PatientSchema
);

export default Patient;
