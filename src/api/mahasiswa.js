

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3307", //ganti dengan URL endpoint API anda
});

const apis = {
    getAllMahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
};

export default apis;
