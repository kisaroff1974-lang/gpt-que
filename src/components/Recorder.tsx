import { useState } from 'react'

export default function Recorder({ onRecorded }: { onRecorded: (b: Blob) => void }) {
  const [recording, setRecording] = useState(false)

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const recorder = new MediaRecorder(stream)
    const chunks: BlobPart[] = []

    recorder.ondataavailable = e => chunks.push(e.data)
    recorder.onstop = () => onRecorded(new Blob(chunks))

    recorder.start()
    setRecording(true)

    setTimeout(() => {
      recorder.stop()
      setRecording(false)
    }, 5000)
  }

  return (
    <button onClick={start}>
      {recording ? '● Запись...' : '🎙 Записать / Перезаписать'}
    </button>
  )
}
