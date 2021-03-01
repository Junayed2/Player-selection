import React from 'react';
import './ShowPlayer.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
const ShowPlayer = (props) => {
    const { picture, name, salary } = props.player;
    return (
        <div className="player">
            <div>
                <img style={{ width: '300px', height: '300px', borderRadius: '15px' }} src={picture} />
            </div>
            <div>
                <h4 className="player-name">{name}</h4>
                <br />
                <p><small>Salary: ${salary}</small></p>
                <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-success"><FontAwesomeIcon icon={faFutbol} /> Select Player</button>
            </div>

        </div>

    );
};

export default ShowPlayer;