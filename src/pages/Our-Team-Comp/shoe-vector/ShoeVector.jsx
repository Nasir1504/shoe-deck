import React, { useState, useEffect } from 'react';

//styles
import './shoe-vector.scss';

//imgs
import ShowVector1 from 'assets/imgs/welcome-page/shoe-vector1.png';
import ShowVector2 from 'assets/imgs/welcome-page/shoe-vector2.png';
import ShowVector3 from 'assets/imgs/welcome-page/shoe-vector3.png';

export default function ShoeVector({ MainNavID, NavID }) {
    const [shoeID, setShoeID] = useState(1)

    useEffect(() => {
        if (MainNavID === 8 && shoeID === 1) {
            setTimeout(() => {
                setShoeID(2)

            }, 1500);
        }
        else if (shoeID === 2) {
            setTimeout(() => {
                setShoeID(3)

            }, 1500);
        }
        else if (shoeID === 3) {
            setTimeout(() => {
                setShoeID(1)

            }, 1500);
        }

        // eslint-disable-next-line
    }, [MainNavID, shoeID])


    return (
        <div className="shoe-vector-main-container">
            <div className="img-container"
                style={{
                    transform: NavID === 0 ? "translateY(-2.5vw) scale(0.2)" :
                        NavID === 1 ? "translateY(0vw) scale(1)" :
                            NavID === 2 ? "translateY(0vw) scale(1.3)" : '',
                }}
            >
                <img src={ShowVector1} alt="" className="shoe-vector-img"
                    style={{
                        opacity: shoeID === 1 ? 1 : 0,
                    }}
                />
                <img src={ShowVector2} alt="" className="shoe-vector-img"
                    style={{
                        opacity: shoeID === 2 ? 1 : 0,
                    }}
                />
                <img src={ShowVector3} alt="" className="shoe-vector-img"
                    style={{
                        opacity: shoeID === 3 ? 1 : 0,
                    }}
                />

            </div>

        </div>
    )
}
