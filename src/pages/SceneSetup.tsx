import { useState } from 'react'
import { parseScene } from '../utils/parseScene'
import { Replica } from '../utils/types'
import ReplicaCard from '../components/ReplicaCard'
import { Link } from 'react-router-dom'

export default function SceneSetup() {
  const [text, setText] = useState('')
  const [replicas, setReplicas] = useState<Replica[]>([])

  return (
    <div style={{ padding: 20 }}>
      <h2>Новая сцена</h2>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Вставьте текст сцены"
        rows={10}
        style={{ width: '100%', marginBottom: 10 }}
      />

      <button onClick={() => setReplicas(parseScene(text))}>
        Разобрать сцену
      </button>

      <div style={{ marginTop: 20 }}>
        {replicas.map(r => (
          <ReplicaCard
            key={r.id}
            replica={r}
            onChange={(updated) =>
              setReplicas(list =>
                list.map(x => x.id === updated.id ? updated : x)
              )
            }
          />
        ))}
      </div>

      <Link to="/">
        <button>🏠 В меню</button>
      </Link>
    </div>
  )
}
