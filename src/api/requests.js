/**
 * @file A point for all requests
 */

import axios from 'axios';
const api = require('./api.json');

const headers = { headers: { 'Content-Type': 'application/json' } };

/**
 * Get sample
 */
export const getSampleRequest = () => axios.get(api.sample, headers);
