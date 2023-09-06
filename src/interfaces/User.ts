import {Document} from 'mongoose';

//interface for user
interface UserOutput {
  _id: string;
  user_name: string;
  email: string;
}

interface User extends UserOutput, Document {
  _id: string;
  password: string;
  role: Date;
}

export {User, UserOutput};
