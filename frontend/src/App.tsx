import { useState } from 'react'
import './App.css'

type Quote = {
  text: string
  author: string
}

type HistoryItem = Quote & {
  viewedAt: string
}

type QuoteResponse = {
  quote: Quote
  viewCount: number
  history: readonly HistoryItem[]
}

export default function App() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [viewCount, setViewCount] = useState(0)
  const [history, setHistory] = useState<readonly HistoryItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function loadQuote() {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/quote')

      if (!response.ok) {
        throw new Error(`Сервер ответил со статусом ${response.status}`)
      }

      const data: QuoteResponse = await response.json()

      setQuote(data.quote)
      setViewCount(data.viewCount)
      setHistory(data.history)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="card">
      <p className="eyebrow">Цитата дня</p>

      <blockquote className="quote">
        {quote ? `«${quote.text}»` : 'Нажми «Новая цитата», чтобы начать'}
      </blockquote>
      {quote && <p className="author">— {quote.author}</p>}

      <button className="btn" onClick={loadQuote} disabled={isLoading}>
        Новая цитата
      </button>
      {error && <p className="status">Ошибка: {error}</p>}

      <section className="stats">
        <p>Показано раз: {viewCount}</p>
        <h2>История последних цитат</h2>
        <ul className="history">
          {history.map((item) => (
            <li key={item.viewedAt}>
              «{item.text}» — {item.author}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
