import React from 'react';
import './user.css';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Search from './Search/Search';

interface UserProps {
    isLoggedIn: boolean;
    username?: string;
    tokensLeft?: number;
}

const User: React.FC<UserProps> = ({ isLoggedIn, username, tokensLeft }) => {
    return (
        <div className="user">
            <div className='user-container'>
                <Avatar size={50} 
                    style={{backgroundColor: '#4f46e5'}}
                    icon={<UserOutlined />}
                />
                <div className="user-info">
                    {isLoggedIn ? (
                        <>
                            <p className="username">{username}</p>
                            <p className="tokens">{tokensLeft} Tokens Left</p>
                        </>
                    ) : (
                        <p className="guest">Guest</p>
                    )}
                </div>
            </div>
            <Search />
        </div>
    );
};

export default User;
