import React from 'react'
import logo from '../../../assets/logo_big.png'
import './features_item2.css'
const Freatures_item2 = (props) => {
    return (
        <div className='feature_item2'>
            <div className="feature-img">
                <img src={props.image} alt="features image" style={{marginRight: props.marginRight}}/>
            </div>
            <div className="feature-desc">
                <div className="feature-title">
                    <p style={{color: props.textColor}}>{props.title}</p>
                </div>
                <div className="feature-content">
                    <p>{props.content}</p>
                </div>
            </div>

        </div>
    )
}

export default Freatures_item2