import { useState } from 'react'
import { parseScene } from '../utils/parseScene'
import { Replica } from '../utils/types'
import ReplicaCard from '../components/ReplicaCard'

export default function SceneSetup() {
  const [text, setText] = useState('')
  const [replicas, setReplicas] = useState<Replica[]>([])

  return (
    <div>
      <h2>Новая сцена</h2>

      <textarea
        rows={10}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Вставьте текст сцены"
      />

      <button onClick={() => setReplicas(parseScene(text))}>
        Разобрать сцену
      </button>

      {replicas.map(r => (
        <ReplicaCard
          key={r.id}
          replica={r}
          onChange={updated =>
            setReplicas(rs => rs.map(x => x.id === updated.id ? updated : x))
          }
        />
      ))}
    </div>
  )
}
