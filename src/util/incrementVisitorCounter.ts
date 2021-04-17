import axios from 'axios';

export const updateVisit = async (id: string) => {
    const { data } = await axios.post(
        `https://wiki-cat.herokuapp.com/visits/${id}`
    );
};
