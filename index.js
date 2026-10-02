import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.get('/api/health', (req, res) => res.json({ status: 'ok', website: 'Luttu Digital' }));
app.get('/', (req, res) => res.sendFile(process.cwd() + '/public/index.html'));
app.listen(PORT, '0.0.0.0', () => console.log(`Luttu Digital running on port ${PORT}`));
