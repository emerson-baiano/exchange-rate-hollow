import api from "../api";

export async function convertAmount(from, to, amount) {
  const response = await api.get(
    `/convert?from=${from}&to=${to}&amount=${amount}`
  );
  return response;
}

export async function getSymbols() {
  const response = await api.get(`/symbols`);
  return response;
}
