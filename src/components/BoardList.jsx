import React, { useEffect, useState } from 'react';
import { ListDetail } from './ListDetail';


export const BoardList = () => {
    const [listInfo, setListInfo] = useState([]);
    const [clieckedItem, setClickedItem] = useState();


    useEffect(() => {
        getAllFromDB();
    }, [])

    const getAllFromDB = async () => {
        const URL = 'http://localhost:7778/country/list';
        const response = await fetch(URL);
        const data = await response.json();
        setListInfo(data);
    }

    const handleListBtn = async (id) => {

        const URL = `http://localhost:7778/country/clickedData/`;
        const response = await fetch(URL + id);
        const data = await response.json();
        setClickedItem(data);

    }

    return (
        <div className="titles">
            <div className="title-list">
                <h3>List</h3>
                {listInfo.map((list, index) => {
                    const { id, title } = list;
                    return (
                        <div key={index}>
                            <div type="button" onClick={() => handleListBtn(id)} className="title-button" >{title}</div>
                        </div>
                    )
                })}
            </div>
            <ListDetail detailInfo={clieckedItem} />

        </div>
    )
}