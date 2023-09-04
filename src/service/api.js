import axios from "axios";
import base64 from 'react-native-base64';

axios.defaults.baseURL = 'https://johnny-dev-env-2023.flowforge.cloud';


// eslint-disable-next-line no-useless-concat
axios.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode('ReactTest' + ':' + 'IRB56idbf#O&83@gY')

const updateData = cities => {return cities.map((city) => ({  value: city, label: city }))}

export const fetchPlace = async () => {
      const {data} = await axios.get('/get-cities-list');
      return updateData(data.cities);
  };

  export const addUser = async (user) => {
    const {data} = await axios.post('/set-form-data-reacttest', user);
    console.log(data);
};
