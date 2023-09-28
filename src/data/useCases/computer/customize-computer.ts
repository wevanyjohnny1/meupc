import { ComputerModel } from '@/domain/models/computer-model'
import { AddComponentParams, IComputer } from '@/domain/useCases/computer'

export class CustomizeComputer implements IComputer {
  constructor (
    private readonly computer: ComputerModel
  ) {}

  addComponent (params: AddComponentParams): ComputerModel {
    this.computer.components.push(params)
    return this.computer
  }

  removeComponent (id: string): ComputerModel {
    return { ...this.computer, components: this.computer.components.filter(component => component.id !== id) }
  }
}
