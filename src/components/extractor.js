import axios from "axios";

export async function getLinks(setItems = () => { }) {
    const vlist = [];
    const response = await axios.get('https://raw.githubusercontent.com/balibabu/mytube/main/urls.txt');
    const texts = response.data.trim();
    const items = texts.split('\n\n');

    items.forEach(item => {
        const values = item.split('\n');
        vlist.push({ title: values[0], video: values[1], thumbnail: values[2] });
    });


    // const vlist = [
    //     { title: 'Video name 1', video: 'https://raw.githubusercontent.com/balibabu/mtube/main/vid1.mp4', thumbnail: 'https://raw.githubusercontent.com/balibabu/mtube/main/spider.png' },
    //     { title: 'Video name 1', video: 'https://raw.githubusercontent.com/balibabu/mtube/main/vid2.mp4', thumbnail: 'https://raw.githubusercontent.com/balibabu/mtube/main/spider.png' },
    //     { title: 'Video name 1', video: 'https://raw.githubusercontent.com/balibabu/mtube/main/vid3.mp4', thumbnail: 'https://raw.githubusercontent.com/balibabu/mtube/main/spider.png' },
    // ]
    setItems(vlist);
    // return vlist;
}