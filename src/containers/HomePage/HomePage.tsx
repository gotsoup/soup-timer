import React from 'react';
import Timer from '../../components/Timer/Timer';

const HomePage = () => (
    <div>Home Page
        <Timer minutes={1} seconds={30}/>
    </div>
)

export default HomePage;