import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const resp = await axios.post('https://jsonplaceholder.typicode.com/users', {
                username,
                password
            });
            console.log(resp.data);
            console.log(resp.status);
            navigate('/home');
        } catch (error) {
            console.error('Login error:', error);
            
        
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            
            <h2 style={{ textAlign : 'center' }}>Login</h2>
            <div style={{ marginBottom: '15px' }}>
                <label  style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                <input
                    type="text"
                    value={username}
                    style={{ width: '100%', padding: '8px' }}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                <input
                    type="password"
                    value={password}
                    style={{ width: '100%', padding: '8px' }}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>Login</button>
        </div>
    );
};

export default LoginPage;
