const getToken = () => JSON.parse(localStorage.getItem('jom_votingapp'));

export { getToken };

const setToken = (token) => localStorage.setItem('jom_votingapp', JSON.stringify(token));

export { setToken };

const clearToken = () => localStorage.setItem('jom_votingapp', JSON.stringify(null));

export { clearToken };
