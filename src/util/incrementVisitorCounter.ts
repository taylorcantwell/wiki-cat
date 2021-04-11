import axios from 'axios';

export const updateVisit = async (id: string) => {
    const { data } = await axios.post(`http://localhost:4000/visits/${id}`);
    console.log(data);
};
