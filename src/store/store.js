import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from '@/src/features/counter/counterSlice'
import postsReducer from '@/src/features/posts/postsSlice'
import topBullCoinsReducer from '@/src/features/top-bull-coins/topBullCoinsSlice'
import topBullCoinsAsyncReducer from '@/src/features/top-bull-coins/topBullCoinsAsyncSlice'
import trendingCoinsAsyncReducer from '@/src/features/trending-coins/trendingCoinsAsyncSlice'
import selectedMainTabReducer from '@/src/features/selected-main-tab/selectedMainTabSlice'

// console.log(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    topBullCoins: topBullCoinsReducer,
    topBullCoinsAsync: topBullCoinsAsyncReducer,
    trendingCoinsAsync: trendingCoinsAsyncReducer,
    selectedMainTab: selectedMainTabReducer,
  },
})

export default store;
