import express from 'express';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/post-routes.js'
import dalleRoutes from './routes/dalle-routes.js'
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

//NOTE: routes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

const port = process.env.PORT || 5000;
const starServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`🚀 Listening on port ${port} `));
  } catch (error) {
    console.log(error);
  }
};
starServer();
