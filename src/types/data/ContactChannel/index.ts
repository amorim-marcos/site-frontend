export interface IContactChannel {
  id: number
  name: string
  description: string
  image: string
  service_code: string
  attention_required?: boolean
  // 'ouvidoria' usa o formulário com upload de arquivo (SB-155)
  flow?: 'default' | 'ouvidoria' | null
}
