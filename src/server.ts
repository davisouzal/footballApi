import app from './app';
import { config } from 'dotenv';

config();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${ PORT }`);
});