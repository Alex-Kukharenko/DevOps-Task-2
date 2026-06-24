const express = require('express')

const app = express()
const PORT = 3000

const QUOTES_SERVICE_HOST = process.env.QUOTES_SERVICE_HOST || 'http://localhost:3005'
const HISTORY_LIMIT = 5

// Состояние храним прямо в памяти процесса — это и есть наша "база" на время жизни контейнера
let viewCount = 0
let history = []

app.get('/quote', async (req, res) => {
  try {
    const response = await fetch(QUOTES_SERVICE_HOST)

    if (!response.ok) {
      throw new Error(`quotes-service ответил со статусом ${response.status}`)
    }

    const quote = await response.json()

    // Бизнес-логика: считаем показы и храним последние N цитат
    viewCount += 1
    history.unshift({ ...quote, viewedAt: new Date().toISOString() })
    history = history.slice(0, HISTORY_LIMIT)

    res.json({
      quote,
      viewCount,
      history,
    })
  } catch (err) {
    res.status(502).json({ error: `Не удалось получить цитату: ${err.message}` })
  }
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Backend worked on http://localhost:${PORT}`)
})
