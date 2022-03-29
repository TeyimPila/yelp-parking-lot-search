import api from "../../../config/axios";

// Due to CORS issue, you might not be able to properly test this. So you can use the sample response below as a mock
// import sampleResponse from '../../../sampleResponse.json'

const findParkingLotsByLocation = async ({ location = '', categories = 'parking' }) => {
  try {

    if (!location || !location.trim()) {
      return
    }

    const { data } = await api.get(`/businesses/search?location=${location}&categories=${categories}`)
    return data
    // This is only used because proxy server I was using to avoid CORS issue was rate limited and I couldn't get results.
    // return sampleResponse
  } catch (e) {
    return Promise.reject(e)
  }
}

export default findParkingLotsByLocation