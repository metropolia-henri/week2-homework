import {Document} from 'mongoose';

//interface for cat
interface Cat extends Document {
  cat_name: string;
  weight: number;
  filename: string;
  birthdate: Date;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  owner: {
    user_name: string;
    email: string;
  };
}

export {Cat};
