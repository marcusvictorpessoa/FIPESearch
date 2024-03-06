import api from '../api';

export async function getBrands() {
  try {
    const response = await api.get('/carros/marcas');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar marcas na API!');
  }
}

export async function getModels(brand_id) {
  try {
    const response = await api.get(`/carros/marcas/${brand_id}/modelos`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar modelos na API!');
  }
}

export async function getYears(brand_id, model_id) {
  try {
    const response = await api.get(
      `/carros/marcas/${brand_id}/modelos/${model_id}/anos`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar anos na API!');
  }
}

export async function getInfo(brand_id, model_id, year_id) {
  try {
    const response = await api.get(
      `/carros/marcas/${brand_id}/modelos/${model_id}/anos/${year_id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar informações do veículo na API!');
  }
}
