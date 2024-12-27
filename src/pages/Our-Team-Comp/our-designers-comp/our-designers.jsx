import React from 'react';

// styles
import './our-designers.scss';

//components
import PolygonVectorComp from '../Polygon-Vector-Comp/polygon-vector-comp';

//imgs
import Profile1 from 'assets/imgs/our-teams/profile11.png';
import Profile2 from 'assets/imgs/our-teams/profile12.png';
import Profile3 from 'assets/imgs/our-teams/profile13.png';
import Profile4 from 'assets/imgs/our-teams/profile4.png';
import Profile5 from 'assets/imgs/our-teams/profile5.png';
import Profile6 from 'assets/imgs/our-teams/profile6.png';
import Profile7 from 'assets/imgs/our-teams/profile7.png';
import Profile8 from 'assets/imgs/our-teams/profile8.png';
import Profile9 from 'assets/imgs/our-teams/profile9.png';

export default function OurDesigners() {
    return (
        <div className="our-designers-main-container">
            <div className="top-section">

                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='0C94FD'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile1}

                        />
                    </div>
                </div>
                <div className="card"
                    style={{
                        marginTop: '4%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='FF0000'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile2}

                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='7000FF'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile3}

                        />
                    </div>
                </div>
                <div className="card"
                    style={{
                        marginTop: '4%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='FFF500'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile4}

                        />
                    </div>
                </div>
                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='CF5248'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile5}

                        />
                    </div>
                </div>

            </div>
            <div className="middle-section">
                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='00FF94'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile6}

                        />
                    </div>
                </div>
                <div className="card"
                    style={{
                        marginTop: '4%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='FF3D00'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile7}

                        />
                    </div>
                </div>
                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='BD00FF'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile8}

                        />
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}
            <div className="bottom-section">
                <div className="card"
                    style={{
                        marginTop: '2%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='00E6FF'
                            BGC2=' rgba(0,0,0,1)'
                            ProImg={Profile9}

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
