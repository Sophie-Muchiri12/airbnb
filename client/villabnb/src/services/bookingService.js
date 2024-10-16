// src/services/bookingService.js

const API_BASE_URL = 'http://localhost:5000'; // Flask API base URL

export async function createBooking(data) {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to create booking');
    }

    return response.json();
}

export async function getGuestBookings(guestId) {
    const response = await fetch(`${API_BASE_URL}/bookings/${guestId}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch bookings');
    }

    return response.json();
}
