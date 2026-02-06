import { Replica } from './types'

export function parseScene(text: string): Replica[] {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)

  const replicas: Replica[] = []
  let currentCharacter = ''
  let buffer: string[] = []
  let id = 0

  const flush = () => {
    if (currentCharacter && buffer.length) {
      replicas.push({
        id: id++,
        character: currentCharacter,
        text: buffer.join(' ')
      })
      buffer = []
    }
  }

  for (const line of lines) {
    if (/^[А-ЯЁA-Z\s]+$/.test(line)) {
      flush()
      currentCharacter = line
    } else {
      buffer.push(line.replace(/^:/, '').trim())
    }
  }

  flush()
  return replicas
}
