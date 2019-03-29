import express from 'express';
import 'ignore-styles';
import renderHtml from './src/server';

const app = express();

app.use(express.static('dist'));

app.get('/*', renderHtml);

const port = 8000;
app.listen(port, () => {
  console.log(`app listening on ${port}`);
});