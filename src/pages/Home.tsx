import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🎭 ПОДАЙ РЕПЛИКУ</h1>

      <p>
        Web-суфлёр для самопроб, репетиций и диалогов.
        <br />
        Читать. Слушать. Повторять.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Link to="/scene">
          <button>🎬 Новая сцена</button>
        </Link>

        <Link to="/rehearsal">
          <button>🎭 Репетиция</button>
        </Link>

        <Link to="/help">
          <button>ℹ️ Help</button>
        </Link>

        <Link to="/donate">
          <button>☕ Поддержать проект</button>
        </Link>

        <small style={{ opacity: 0.6 }}>
          Добровольная поддержка проекта
        </small>
      </div>
    </div>
  )
}
