import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5000
const distPath = path.join(__dirname, '../client/dist')
const isProd =
  process.env.NODE_ENV === 'production' || fs.existsSync(distPath)

app.use(cors())
app.use(express.json())

const inquiries = []

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, company: 'Fayakoon Engineering Pvt. Ltd.' })
})

app.get('/api/company', (_req, res) => {
  res.json({
    name: 'Fayakoon Engineering Pvt. Ltd.',
    founded: 1994,
    pec: '2730 Category C2',
    ntn: '3366472-2',
    website: 'https://www.fayakoon.com.pk',
    email: 'info@fayakoon.com.pk',
  })
})

app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }
  const entry = {
    id: inquiries.length + 1,
    name,
    email,
    phone: phone || '',
    company: company || '',
    message,
    receivedAt: new Date().toISOString(),
  }
  inquiries.push(entry)
  console.log('[contact]', entry)
  res.json({
    ok: true,
    message: 'Thank you. Your inquiry has been received. Our team will respond shortly.',
  })
})

if (isProd) {
  app.use(express.static(distPath))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Fayakoon server running on http://localhost:${PORT}`)
})
