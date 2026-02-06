export type Replica = {
  id: number
  character: string
  text: string
  role?: 'mine' | 'partner'
  audioBlob?: Blob
}
