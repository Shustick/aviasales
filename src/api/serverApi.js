import { fetchTickets, areTicketsLoaded } from '../store/actions/fetchActions';

const API_URL = 'https://aviasales-test-api.kata.academy';

async function getSearchId() {
  const res = await fetch(`${API_URL}/search`);
  if (!res.ok) {
    return res;
  }
  const result = await res.json();
  return result;
}

export const getAndSaveId = async () => {
  const storedId = localStorage.getItem('id');

  if (!storedId) {
    localStorage.clear();
    const res = await getSearchId();
    const id = res.searchId;
    localStorage.setItem('id', id);
    return id;
  } else return storedId;
};

export const getTickets = (id) => async (dispatch) => {
  let stop = false;
  while (!stop) {
    try {
      const response = await fetch(`${API_URL}/tickets?searchId=${id}`);
      if (response.ok) {
        const json = await response.json();
        await dispatch(fetchTickets(json.tickets));
        await dispatch(areTicketsLoaded(json.stop));
        stop = json.stop;
      } else {
        throw new Error('Error fetching tickets');
      }
    } catch (error) {
      console.error(error);
    }
  }
};
