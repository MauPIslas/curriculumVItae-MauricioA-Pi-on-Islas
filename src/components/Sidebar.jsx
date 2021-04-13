import React from 'react';
import img from '../images/OGIMAGEMAU.jpg'

const Sidebar = ({children}) =>(
    <div className="Sidebar">
        <div className="Sidebar-container">
            {children}
        </div>
        
    </div>
);

export default Sidebar;