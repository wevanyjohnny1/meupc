import { mockComputerComponent } from '../../../domain/test/mock-computer-component'
import { CustomizeComputer } from './customize-computer'
import { ComputerModel } from 'domain/models/computer-model'
import { AddComponentParams } from 'domain/useCases/computer'

type SutTypes = {
  sut: CustomizeComputer
  params: AddComponentParams
}

const makeSut = (computer: ComputerModel, params: AddComponentParams): SutTypes => {
  const sut = new CustomizeComputer(computer)
  return {
    sut,
    params
  }
}

describe('CustomizeComputer', () => {
  test('Should customize with correct component', () => {
    const computer = {
      components: []
    }
    const { sut, params } = makeSut(computer, mockComputerComponent)
    sut.addComponent(mockComputerComponent)
    expect(params).toMatchObject(mockComputerComponent)
  })
})
