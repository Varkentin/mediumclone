import axios from '@/api/axios.js'

const register = credentials => {
	return axios.post('/users', {
		user: credentials
	})
}

const login = credentials => {
	return axios.post('/users/login', {user: credentials})
}

export default {
	register,
	login
}