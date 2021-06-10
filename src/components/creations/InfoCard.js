import React from 'react'

const InfoCard = ({img, title, glink, slink}) => {
    return (
        <div className="info-card">
            <h3>{title}</h3>
            <img src={img} />
            <ul>
                {glink === "" ? null :
                <li>
                    <a target="_blank" href={glink}>GitHub</a>
                </li>
                }
                <li>
                    <a target="_blank" href={slink}>Visiter</a>
                </li>
            </ul>
        </div>
    )
}

export default InfoCard
