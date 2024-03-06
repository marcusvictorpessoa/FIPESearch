import React, {createContext, useEffect, useState, useContext} from 'react';

export const SearchFormContext = createContext({});

export function SearchFormProvider({children}) {
  const [brand, setBrand] = useState({codigo: '', nome: ''});
  const [model, setModel] = useState({codigo: 0, nome: ''});
  const [year, setYear] = useState({codigo: '', nome: ''});

  const [isSubmitDisable, setIsSubmitDisable] = useState(false);

  function changeBrandValue(brand_item) {
    setBrand({codigo: brand_item?.codigo, nome: brand_item?.nome});
  }

  function changeModelValue(model_item) {
    setModel({codigo: model_item?.codigo, nome: model_item?.nome});
  }

  function changeYearValue(year_item) {
    setYear({codigo: year_item?.codigo, nome: year_item?.nome});
  }

  useEffect(() => {
    if ((!!brand?.nome, !!model?.nome, !!year.nome)) {
      setIsSubmitDisable(false);
    } else {
      setIsSubmitDisable(true);
    }
  }, [brand, model, year]);

  return (
    <SearchFormContext.Provider
      value={{
        brand: brand,
        model,
        year,
        changeBrandValue,
        changeModelValue,
        changeYearValue,
        isSubmitDisable,
      }}>
      {children}
    </SearchFormContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchFormContext);
  return context;
}
