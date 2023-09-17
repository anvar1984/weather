import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
    state: {
      apiKey: 'fd0a6ca27d5cbf5772fec7ac633ae094',
      fullWeather: null
    },
    mutations: { 
      setWeather(state, payload){
        state.fullWeather = payload
      }
    },
    actions: {
      async setWeather({commit, state}, city='Ташкент'){
        try {
          let result = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`);
          let cityInfo = result.data[0];
          let {lat, lon, local_names} = cityInfo;
          let result2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&lang=ru&units=metric`);
          let weather = { ...result2.data, name: local_names.ru};
          commit('setWeather', weather)
          console.log(weather);
        } catch (error) {
          console.log(error);
        }
      }
    },
    getters: {   
      getFullWeather(state){
        return state.fullWeather;
      },
      getDailyWeather(state){
        return state.fullWeather.daily
      }
    }
})

export default store;