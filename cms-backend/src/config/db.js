import mongoose from 'mongoose';

export async function connectDb(uri = process.env.MONGODB_URI) {
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 15000,
  });

  return mongoose.connection;
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
