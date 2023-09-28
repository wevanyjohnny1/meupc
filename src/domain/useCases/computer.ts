import { ComputerModel } from '@/domain/models/computer-model'

export type AddComponentParams = {
  id: string
  type: string
  name: string
  rules: any[]
  capacity?: number
}

export interface IComputer {
  addComponent (params: AddComponentParams): ComputerModel
}
