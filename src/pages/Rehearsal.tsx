import { Link } from 'react-router-dom'

export default function Rehearsal() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🎭 Репетиция</h2>

      <p>
        Режим репетиции будет следующим шагом.
        <br />
        Сейчас мы проверяем основу.
      </p>

      <Link to="/">
        <button>🏠 В меню</button>
      </Link>
    </div>
  )
}
