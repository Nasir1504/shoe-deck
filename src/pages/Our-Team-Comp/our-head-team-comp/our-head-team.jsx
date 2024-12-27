import React, { useState } from 'react';

// styles
import './our-head-team.scss';

//components
import PolygonVectorComp from '../Polygon-Vector-Comp/polygon-vector-comp';

// img
import Profile1 from 'assets/imgs/our-teams/profile1.png';
import Profile2 from 'assets/imgs/our-teams/profile2.png';
import Profile3 from 'assets/imgs/our-teams/profile3.png';
import Profile4 from 'assets/imgs/our-teams/profile10.png';

export default function OurHeadTeam() {

    const [cardID, setCardID] = useState(null);

    return (
        <div className="our-head-team-main-container">
            <div className="top-section">

                <div className="card">
                    <div className="card-inner" >
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='BB0B14'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={1}
                            HeadTeam={true}
                            ProImg={Profile1}
                            Name='Nasir Aftab'
                            Designation='CEO'

                        />
                    </div>
                </div>

                <div className="card"
                    style={{
                        marginTop: '10%'
                    }}
                >
                    <div className="card-inner"
                    // onClick={() => { setCardID(2) }}
                    // onMouseOut={() => { setCardID(null) }}

                    >
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='BB0B14'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={2}
                            HeadTeam={true}
                            ProImg={Profile2}
                            Name='Gaurav Srivastava'
                            Designation='Director'

                        />
                    </div>
                </div>

                <div className="card" >
                    <div className="card-inner"
                    // onClick={() => { setCardID(3) }}
                    // onMouseOut={() => { setCardID(null) }}

                    >
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='BB0B14'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={3}
                            HeadTeam={true}
                            ProImg={Profile3}
                            Name='Rahul Ahuja'
                            Designation='Founder'

                        />
                    </div>
                </div>

            </div>

            {/* ---------------------------------- */}
            <div className="bottom-section">
                <div className="card"
                    style={{
                        marginTop: '1.4%'
                    }}
                >
                    <div className="card-inner"
                    // onClick={() => { setCardID(4) }}
                    // onMouseOut={() => { setCardID(null) }}

                    >
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='BB0B14'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={4}
                            HeadTeam={true}
                            ProImg={Profile4}
                            Name='Deepika Yadav'
                            Designation='HR'

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
