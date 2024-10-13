import React from 'react';
import './session.css';

const Session: React.FC = () => {
    return (
        <div className="session">
            <div className="today">
                <h3>Today <span className="item-count">12</span></h3>
                <ul>
                    <li>How to be a better person?</li>
                    <li>Hacking FBI server with linux</li>
                    <li>How to get rich from YouTube as an...</li>
                    <li>Help me with web development ta...</li>
                    <li>REACT NEXTJS Tutorial</li>
                </ul>
            </div>
            <div className="previous">
                <h3>Previous 7 Days <span className="item-count">118</span></h3>
                <ul>
                    <li>Mobile app prototypes library</li>
                    <li>ROM Types and uses</li>
                    <li>Fix SSL/TLS Error</li>
                    <li>Platform template for developers</li>
                    <li>Mobile development with golang</li>
                </ul>
            </div>
        </div>
    );
};

export default Session;
