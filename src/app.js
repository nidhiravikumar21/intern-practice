const express = require('express');
const healthRoutes = require('./routes/health');
const versionRoutes = require('./routes/version');

const app = express();

app.use(express.json());
app.use('/api/health', healthRoutes);
app.use('/api/version', versionRoutes);

module.exports = app;
