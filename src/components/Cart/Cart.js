import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let Salary = 0;
    for (let i = 0; i < cart.length; i++) {
        const eachSalary = cart[i];
        Salary = eachSalary.salary;

    }
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        let playerInfo = cart[i].salary;
        const salaryNumber = Number(playerInfo);
        totalSalary = totalSalary + salaryNumber;

    }

    for (let i = 0; i < cart.length; i++) {
        var playerName = cart[i].name;
        var everyPlayer = " ";
        everyPlayer = everyPlayer + playerName;
    }

    return (
        <div>
            <h2 style={{ color: 'goldenrod' }}>Select Player:  {cart.length}</h2>
            <div>

                {
                    cart.map(playerName => <div style={{ borderRadius: '10px' }} className='border p-3 mt-3'><span style={{ color: '#00ffdd' }}> Name: {playerName.name}</span><br></br>Salary: ${playerName.salary}</div>)
                }
            </div>

            <h4 style={{ color: 'goldenrod' }}>Total Budget:${totalSalary.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;