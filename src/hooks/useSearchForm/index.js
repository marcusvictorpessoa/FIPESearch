import {useContext} from 'react';
import {SearchFormContext} from '../../contexts/SearchFormContext';

export default function useSearchForm() {
  const context = useContext(SearchFormContext);
  return context;
}
