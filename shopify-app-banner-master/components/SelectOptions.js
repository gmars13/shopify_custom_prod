import React, { useState, useCallback} from 'react'
import { Select } from '@shopify/polaris';

const SelectOptions = () => {
    const [selected, setSelected] = useState('radio');
  
    const handleSelectChange = useCallback((value) => {
        setSelected(value);
    }, []);
  
    const options = [
      {label: 'Select type', value: 'select'},
      {label: 'Text type', value: 'text'},
      {label: 'Radio type', value: 'radio'},
    ];
  
    return (
      <Select
        label="Choose custom options"
        options={options}
        onChange={handleSelectChange}
        value={selected}
      />
    );
  }

export default SelectOptions
