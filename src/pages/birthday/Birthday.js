// import axios from 'axios'
import React, {  useState } from 'react'
import List from '../../components/birthday/List'
import './Birthday.css'
import data from './data'
const Birthday = () => {
    const [people, setpeople] = useState(data);
    // const getdata = async () => {
    //     try {
    //         const rest = await axios.get('url');
    //         if (rest.status === 200) {
    //             setpeople(rest.data);
    //         }

    //     } catch (error) {
    //         console.log(error);

    //     }
    // };
    // useEffect(() => {
    //     getdata();
    // }, [])
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button className="delete-people" onClick={()=>setpeople([])}>delete all</button>
                <button className="get-people" onClick={()=>setpeople(data)}>get data</button>
            </section>
        </main>
    )
}

export default Birthday
