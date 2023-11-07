import { writable } from 'svelte/store';

const user = 'aaaa@bbbbb.com'
const pass = 'hello1234'

export const store = writable(null);

let sessions = []

export const getUserDetails = async ( username, password ) => {
	if ( username === user && password === pass )
		return 1
}
