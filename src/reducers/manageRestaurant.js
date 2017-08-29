
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = Object.assign({}, { text: action.restaurant, id: cuid() })
      return Object.assign({}, state, { restaurants: [...state.restaurants, newRestaurant]})
    case 'DELETE_RESTAURANT':
      return Object.assign({}, state, { restaurants: state.restaurants.filter( (restaurant) => {return restaurant.id !== action.id} ) } )
    case 'ADD_REVIEW':
      const newReview = Object.assign({}, { text: action.review, restaurantId: action.restaurantId, id: cuid() })
      return Object.assign({}, state, { reviews: [...state.reviews, newReview]})
    case 'DELETE_REVIEW':
      return Object.assign({}, state, { reviews: state.reviews.filter( (review) => {return review.id !== action.review.id} ) } )
    default:
      return state
  }
}
