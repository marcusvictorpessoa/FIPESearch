import {useState} from 'react';
import {getBrands, getInfo, getModels, getYears} from '../../services/requests';
import {Alert} from 'react-native';
import Strings from '../../strings';
import useSearchForm from '../useSearchForm';

export default function useSearchRequests() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const {brand, model, year} = useSearchForm();

  async function getBrandsFromAPI() {
    setLoading(true);
    try {
      const data = await getBrands();
      setBrands(data);
    } catch (error) {
      Alert.alert(Strings.FIPESearch, error?.message, [{text: Strings.ok}], {
        cancelable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  async function getModelsFromAPI() {
    setLoading(true);
    try {
      const data = await getModels(brand?.codigo);
      setModels(data?.modelos);
    } catch (error) {
      Alert.alert(Strings.FIPESearch, error?.message, [{text: Strings.ok}], {
        cancelable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  async function getYearsFromAPI() {
    setLoading(true);
    try {
      const data = await getYears(brand?.codigo, model?.codigo);
      setYears(data);
    } catch (error) {
      Alert.alert(Strings.FIPESearch, error?.message, [{text: Strings.ok}], {
        cancelable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  async function getInfoFromAPI() {
    setLoadingSearch(true);
    try {
      const data = await getInfo(brand?.codigo, model?.codigo, year?.codigo);
      return data;
    } catch (error) {
      Alert.alert(Strings.FIPESearch, error?.message, [{text: Strings.ok}], {
        cancelable: true,
      });
    } finally {
      setLoadingSearch(false);
    }
  }

  return {
    brands,
    models,
    years,
    loading,
    getBrandsFromAPI,
    getModelsFromAPI,
    getYearsFromAPI,
    getInfoFromAPI,
    loadingSearch,
  };
}
