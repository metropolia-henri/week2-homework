// TODO: mongoose schema for cat
import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';
import {Cat} from '../../interfaces/Cat';
// Schema for the Category model
// based on the Animal interface located at: src/interfaces/Animal.ts

const animalSchema = new Schema<Cat>({
  cat_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  weight: {
    species: {type: mongoose.Schema.Types.ObjectId, ref: 'Species'},
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
    },
  },
  owner: {
    user_name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
});

export default model<Cat>('Animal', animalSchema);
