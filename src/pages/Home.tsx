import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>🎭 ПОДАЙ РЕПЛИКУ</h1>
      <p>Web-суфлёр для самопроб и репетиций</p>

      <nav>
        <Link to="/scene">🎬 Новая сцена</Link><br/>
        <Link to="/rehearsal">🎭 Репетиция</Link><br/>
        <Link to="/help">ℹ️ Help</Link><br/>
        <Link to="/donate">☕ Поддержать проект</Link>
        <small>Добровольная поддержка проекта</small>
      </nav>
    </div>
  )
}
