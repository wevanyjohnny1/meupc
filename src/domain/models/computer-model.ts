type Component = {
  id: string
  type: string
  name: string
  rules: any[]
  capacity?: number
}

export type ComputerModel = {
  components: Component[]
}
