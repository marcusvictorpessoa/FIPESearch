import Strings from '../../strings';
import api from '../api';

export async function getBrands() {
  try {
    const response = await api.get('/carros/marcas');
    return response.data;
  } catch (error) {
    throw new Error(Strings.ErrorToSearchBrandsFromApi);
  }
}

export async function getModels(brand_id) {
  try {
    const response = await api.get(`/carros/marcas/${brand_id}/modelos`);
    return response.data;
  } catch (error) {
    throw new Error(Strings.ErrorToSearchModelsFromApi);
  }
}

export async function getYears(brand_id, model_id) {
  try {
    const response = await api.get(
      `/carros/marcas/${brand_id}/modelos/${model_id}/anos`,
    );
    return response.data;
  } catch (error) {
    throw new Error(Strings.ErrorToSearchYearsFromApi);
  }
}

export async function getInfo(brand_id, model_id, year_id) {
  try {
    const response = await api.get(
      `/carros/marcas/${brand_id}/modelos/${model_id}/anos/${year_id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(Strings.ErrorToSearchInfoFromApi);
  }
}
