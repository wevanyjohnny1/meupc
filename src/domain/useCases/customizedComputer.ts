import { ComputerModel } from 'domain/models/computer-model'

type AddComponentParams = {
  type: string
  name: string
}

export interface ICustomizedComputer {
  addComponent (params: AddComponentParams): ComputerModel
}
