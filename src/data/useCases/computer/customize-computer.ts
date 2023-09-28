import { ComputerModel } from '@/domain/models/computer-model'
import { AddComponentParams } from '@/domain/useCases/computer'

export class CustomizeComputer {
  constructor (
    private readonly computer: ComputerModel
  ) {}

  addComponent (params: AddComponentParams): ComputerModel {
    this.computer.components.push(params)
    return this.computer
  }
}
