class RestaurantClass {
  id: number
  restaurantImage: string
  restaurantTitle: string
  restaurantRating: string
  restaurantDetails: string[]
  restaurantDescription: string

  constructor(
    id: number,
    restaurantImage: string,
    restaurantTitle: string,
    restaurantRating: string,
    restaurantDetails: string[],
    restaurantDescription: string
  ) {
    this.id = id
    this.restaurantImage = restaurantImage
    this.restaurantTitle = restaurantTitle
    this.restaurantRating = restaurantRating
    this.restaurantDetails = restaurantDetails
    this.restaurantDescription = restaurantDescription
  }
}

export default RestaurantClass
