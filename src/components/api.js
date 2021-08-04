
import axios from "axios";

const url = "https://labeninjas.herokuapp.com/jobs";
const headers =  { Authorization: "089c363c-2449-490e-9e13-234a13327ac2" };

export function listarServiços() {
  return axios.get(url, { headers });
}

export function criarServiço(body) {
  return axios.post(url, body, { headers });
}

export function removerServiço(id) {
  return axios.delete(`${url}/${id}`, { headers });
}

export async function alterarContratação(id, contratado) {
  return await axios.post(`${url}/${id}`, { taken: !contratado }, { headers });
}

export async function contratarServiço(id) {
  return await axios.post(`${url}/${id}`, { taken: true }, { headers });
}
