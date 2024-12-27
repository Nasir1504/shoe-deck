import React from 'react';

// styles
import './polygon-vector-comp.scss';


// images
import polygonVector from 'assets/imgs/our-teams/polygon-vector.png';
// import ProfileImg from 'assets/imgs/meet-our-team/vintage-images.jpeg';

export default function PolygonVectorComp({
    Dir,
    BGC1,
    BGC2,
    CardID,
    ID,
    HeadTeam,
    SetCardID,
    HandleCardId,
    ProImg,
    Name,
    Designation
}) {


    return (
        <div className="polygon-vector-comp-main-container"
            style={{
                transform: ID === CardID && 'scaleX(-1)'
            }}
        >


            <div className="polygon-vector-inner"
                style={{
                    WebkitMaskImage: `url(${polygonVector})`,
                    maskImage: `url(${polygonVector})`,
                    transform: Dir === 'up' && 'rotate(180deg)',

                }}
                onClick={() => { SetCardID && SetCardID(ID) }}

            >

                <div className="bg-color-ract"
                    style={{
                        background: `linear-Gradient(180deg, #${BGC1} 0%, ${BGC2} 120%)`,
                        opacity: ID !== CardID && '0'
                    }}
                >
                    <img src={ProImg} alt="" className="profile-img"
                        style={{
                            transform: Dir === 'up' && 'translate(6%, -15%) scale(-1)',
                            display: HeadTeam && 'none'

                        }}
                    />
                    <div className="top-layer"
                        onMouseOut={() => { SetCardID && SetCardID(null) }}
                    />

                    <p
                        style={{
                            display: Dir !== 'up' && HeadTeam && 'none',
                            transform: 'scale(1, -1) translateY(60%)',
                            color: '#fff'
                        }}
                    >
                        <b>{Name}</b>
                        <span>{Designation}</span>
                    </p>
                    <p
                        style={{
                            display: Dir === 'up' && HeadTeam && 'none',
                            transform: 'scale(-1, 1) translateY(-60%)',
                            color: '#fff'
                        }}
                    >
                        <b>{Name}</b>
                        <span>{Designation}</span>
                    </p>

                </div>

                <div className="bg-color-ract2"
                    style={{
                        background: `linear-Gradient(180deg, #4D4D4D 0%, ${BGC2} 120%)`,
                        opacity: ID === CardID && '0',
                    }}
                >
                    <img src={ProImg} alt="" className="profile-img"
                        style={{
                            transform: Dir === 'up' && 'translate(6%, -15%) scale(-1)',
                            // display: !HeadTeam && 'none'

                        }}
                    />

                </div>
            </div>
        </div >
    )
}
