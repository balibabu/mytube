import axios from "axios";

export async function getLinks(setItems = () => { }) {
    const vlist = [];
    const response = await axios.get('https://raw.githubusercontent.com/balibabu/mytube/main/urls');
    const texts = response.data.trim();
    const items = texts.split('\n\n');

    items.forEach(item => {
        const values = item.split('\n');
        vlist.push({ title: values[0], thumbnail: values[1], video: values.slice(2) });
    });

    setItems(vlist);
}