import * as Mongoose from 'mongoose';

export async function databaseConnect() {
  try {
    await Mongoose.connect('mongodb://127.0.0.1:27017/');
    return '*** database connection succeeded ***';
  } catch (err) {
    return '*** database connection error ***';
  }
}
