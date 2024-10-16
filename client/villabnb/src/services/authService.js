// src/services/authService.js

const API_BASE_URL = 'http://localhost:5000'; // Flask API base URL

export async function signupUser(data) {
    const response = await fetch(`${API_BASE_URL}/guests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to signup');
    }

    return response.json();
}

export async function loginUser(data) {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    return response.json();
}
