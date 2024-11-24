'use client'
import React, {FC, useState} from 'react';
import './TrailerComponent.css'

type Props = {
    trailerLink: string | undefined;
}
const TrailerComponent: FC<Props> = ({trailerLink}) => {
    const [modalVisible, setModalVisible] = useState(false);
    console.log(trailerLink)
    return (
        <div className='trailer-component'>
            <button className="trailer-btn" onClick={() => setModalVisible(true)}>
                <span className="icon">▶</span>
                Смотреть трейлер
            </button>
            {
                modalVisible ?
                <div className={'modal-window'} onClick={() => setModalVisible(false)}>
                    <button onClick={() => setModalVisible(false)}>Close</button>
                    <iframe src={trailerLink} allowFullScreen={true}/>
                </div> : ''
            }
        </div>
    );
};

export default TrailerComponent;