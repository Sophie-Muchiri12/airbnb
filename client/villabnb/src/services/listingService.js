// src/services/listingService.js

const API_BASE_URL = 'http://localhost:5000'; // Flask API base URL

export async function getListings() {
    const response = await fetch(`${API_BASE_URL}/listings`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch listings');
    }

    return response.json();
}

export async function createListing(data) {
    const response = await fetch(`${API_BASE_URL}/listings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to create listing');
    }

    return response.json();
}
