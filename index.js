
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


// DATABASE CONNECTION
require('./src/services/database');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//app.set('port', 8000);

/* ROTAS */
app.use('/cliente', require('./src/routes/cliente.routes'));
app.use('/log', require('./src/routes/log.routes'));


app.listen(process.env.PORT || 8000, () => {
  console.log(`WS escutando porta ${app.get('port')}`);
});
