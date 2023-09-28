import { mockComputerComponent } from '@/domain/test/mock-computer-component'
import { CustomizeComputer } from './customize-computer'
import { ComputerModel } from '@/domain/models/computer-model'
import { AddComponentParams } from '@/domain/useCases/computer'

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

  test('Should add a new component to computer', () => {
    const computer = {
      components: []
    }
    const componentsLength = computer.components.length
    const { sut } = makeSut(computer, mockComputerComponent)
    const response = sut.addComponent(mockComputerComponent)
    expect(response.components.length).toBeGreaterThan(componentsLength)
  })

  test('Should remove a component from computer', () => {
    const computer = {
      components: [mockComputerComponent]
    }
    const componentsLength = computer.components.length
    const { sut } = makeSut(computer, mockComputerComponent)
    const response = sut.removeComponent(mockComputerComponent.id)
    expect(response.components.length).toBeLessThan(componentsLength)
  })
})
