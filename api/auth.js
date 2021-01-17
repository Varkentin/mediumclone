import axios from '@/api/axios.js'

const register = credentials => {
	return axios.post('/users', {
		user: credentials
	})
}

export default {
	register
}