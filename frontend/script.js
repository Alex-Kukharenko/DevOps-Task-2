const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')
const viewCountEl = document.getElementById('view-count')
const historyList = document.getElementById('history-list')
const statusEl = document.getElementById('status')
const refreshBtn = document.getElementById('refresh-btn')

async function loadQuote() {
  refreshBtn.disabled = true
  statusEl.textContent = ''

  try {
    const response = await fetch('/api/quote')

    if (!response.ok) {
      throw new Error(`Сервер ответил со статусом ${response.status}`)
    }

    const data = await response.json()

    quoteText.textContent = `«${data.quote.text}»`
    quoteAuthor.textContent = `— ${data.quote.author}`
    viewCountEl.textContent = data.viewCount

    historyList.innerHTML = data.history
      .map((item) => `<li>«${item.text}» — ${item.author}</li>`)
      .join('')
  } catch (err) {
    statusEl.textContent = `Ошибка: ${err.message}`
  } finally {
    refreshBtn.disabled = false
  }
}

refreshBtn.addEventListener('click', loadQuote)

loadQuote()
