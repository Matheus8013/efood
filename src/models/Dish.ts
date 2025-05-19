class DishClass {
  id: number
  DishImg: string
  DishTitle: string
  DishInfo: string

  constructor(
    id: number,
    DishImg: string,
    DishTitle: string,
    DishInfo: string
  ) {
    this.id = id
    this.DishImg = DishImg
    this.DishTitle = DishTitle
    this.DishInfo = DishInfo
  }
}

export default DishClass
