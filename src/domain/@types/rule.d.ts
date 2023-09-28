type AdditionalRule = {
  type: string
  capacity: number
}

declare interface IRule {
  category: string
  mustHave: string[] | AdditionalRule
}
