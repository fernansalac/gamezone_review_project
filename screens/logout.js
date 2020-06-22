import React, { useState } from 'react';
import Login from './login';


export default function Logout() {
    // const [isLogout, setIsLogout] = useState(false);\
    const isLogout = false;
    return (
        // <Login isLogut={isLogout}  setIsLogout={setIsLogout} />
        <Login isLogut={isLogout} />
    )
}
