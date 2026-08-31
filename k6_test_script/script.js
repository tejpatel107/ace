import http from 'k6/http';
import { check } from 'k6';

const SERVER_IP = '192.168.1.116';
const BASE_URL = `http://${SERVER_IP}`;

const CUSTOMER_EMAIL = 'customer10101@example.com';
const CUSTOMER_URL = `${BASE_URL}/api/customers/email/${encodeURIComponent(CUSTOMER_EMAIL)}`;

export const options = {
    stages: [
        { target: 100, duration: '30s' },
        { target: 250, duration: '1m' },
        { target: 500, duration: '1m' },
        { target: 750, duration: '1m' },
    ],

    summaryTrendStats: [
        'avg',
        'min',
        'med',
        'max',
        'p(90)',
        'p(95)',
        'p(99)',
    ],
};

export function setup() {
    const payload = JSON.stringify({
        email: 'admin@admin.com',
        password: '123456789',
    });

    const response = http.post(
        `${BASE_URL}/api/auth/login`,
        payload,
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            timeout: '10s',
        }
    );

    const loginSuccessful = check(response, {
        'login returned 200': (r) => r.status === 200,
        'login returned token': (r) => {
            try {
                return Boolean(r.json('data.token'));
            } catch (e) {
                return false;
            }
        },
    });

    if (!loginSuccessful) {
        throw new Error(
            `Login failed: ${response.status} ${response.body}`
        );
    }

    return {
        token: response.json('data.token'),
    };
}

export default function (data) {
    const response = http.get(CUSTOMER_URL, {
        headers: {
            Authorization: `Bearer ${data.token}`,
            Accept: 'application/json',
        },
        timeout: '5s',
    });

    check(response, {
        'customer lookup returned 200': (r) => r.status === 200,
    });
}