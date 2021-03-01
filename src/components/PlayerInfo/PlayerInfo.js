import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import ShowPlayer from '../ShowPlayer/ShowPlayer';
import './PlayerInfo.css'
import Data from '../../data/data.json'
import { useState } from "react";

const PlayerInfo = () => {
    const [playerData, setPlayerData] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setPlayerData(Data);
    }, [])
    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="player-container">
            <div className="showPlayer-container">

                {
                    playerData.map(player => <ShowPlayer handleAddPlayer={handleAddPlayer} player={player}></ShowPlayer>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default PlayerInfo;