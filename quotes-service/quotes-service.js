const express = require('express')

const app = express()
const PORT = 3005

const quotes = [
  { text: 'Лучший способ научиться — это делать.', author: 'Ричард Фейнман' },
  { text: 'Код пишут для людей, а не для компьютеров.', author: 'Harold Abelson' },
  { text: 'Простота — залог надёжности.', author: 'Edsger Dijkstra' },
  { text: 'Сначала заставь работать, потом делай красиво.', author: 'Kent Beck' },
  {
    text: 'Любая сложная проблема имеет простое, понятное всем неправильное решение.',
    author: 'H. L. Mencken',
  },
  {
    text: 'Программирование — это искусство говорить компьютеру, что делать.',
    author: 'Народная мудрость',
  },
  { text: 'Дебаггинг в два раза сложнее написания кода.', author: 'Brian Kernighan' },
  { text: 'Преждевременная оптимизация — корень всех зол.', author: 'Donald Knuth' },
  {
    text: 'Любой дурак может написать код, понятный компьютеру. Хорошие программисты пишут код, понятный людям.',
    author: 'Martin Fowler',
  },
  { text: 'Сначала решите проблему. Потом напишите код.', author: 'John Johnson' },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  {
    text: 'Если отладка — это процесс удаления ошибок, то программирование должно быть процессом их добавления.',
    author: 'Edsger Dijkstra',
  },
  { text: 'Хороший код — это сам себе документация.', author: 'Steve McConnell' },
  { text: 'Не существует серебряной пули.', author: 'Frederick Brooks' },
  { text: 'Самая опасная фраза в языке: «Мы всегда так делали».', author: 'Grace Hopper' },
  { text: 'Слова — это всего лишь слова. Важна реализация.', author: 'Народная мудрость' },
  { text: 'Опыт — это название, которое мы даём своим ошибкам.', author: 'Oscar Wilde' },
  {
    text: 'Единственный способ научиться новому языку программирования — писать на нём программы.',
    author: 'Dennis Ritchie',
  },
  {
    text: 'Программы должны писаться для того, чтобы люди их читали, и лишь случайно — для того, чтобы машины их выполняли.',
    author: 'Harold Abelson',
  },
  { text: 'Простота — это предпосылка надёжности.', author: 'Edsger Dijkstra' },
  { text: 'Контроль версий — это машина времени для вашего кода.', author: 'Народная мудрость' },
  {
    text: 'Лучшая система контроля версий — это та, которой вы пользуетесь.',
    author: 'Народная мудрость',
  },
  {
    text: 'Тестирование может доказать наличие ошибок, но никогда не докажет их отсутствие.',
    author: 'Edsger Dijkstra',
  },
  {
    text: 'Любая технология, достаточно развитая, неотличима от магии.',
    author: 'Arthur C. Clarke',
  },
  {
    text: 'Программное обеспечение становится медленнее быстрее, чем железо становится быстрее.',
    author: 'Niklaus Wirth',
  },
]

app.get('/', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)]
  res.json(random)
})

app.listen(PORT, () => {
  console.log(`Quotes-service worked on http://localhost:${PORT}`)
})
