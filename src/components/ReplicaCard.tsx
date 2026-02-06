import { Replica } from '../utils/types'
import Recorder from './Recorder'

export default function ReplicaCard({
  replica,
  onChange
}: {
  replica: Replica
  onChange: (r: Replica) => void
}) {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: 8 }}>
      <strong>{replica.character}</strong>
      <p style={{ maxHeight: 120, overflowY: 'auto' }}>{replica.text}</p>

      {!replica.role && (
        <>
          <button onClick={() => onChange({ ...replica, role: 'mine' })}>
            🧑‍🎤 Моя
          </button>
          <button onClick={() => onChange({ ...replica, role: 'partner' })}>
            🎙 Партнёр
          </button>
        </>
      )}

      {replica.role === 'partner' && (
        <Recorder
          onRecorded={blob =>
            onChange({ ...replica, audioBlob: blob })
          }
        />
      )}
    </div>
  )
}
