import React from 'react';
import Select, {
  components,
} from 'react-select';

const Control = ({ children, ...props }) => {
  const { emoji, onEmojiClick } = props.selectProps;
  const style = { cursor: 'pointer' };

  return (
    <components.Control {...props}>
      <span onMouseDown={onEmojiClick} style={style}>
        {emoji}
      </span>
      {children}
    </components.Control>
  );
};

const CustomSelectProps = ({ autocompleteCities, onChange }) => {

  const handleChange = ({ value }) => {
    onChange({ target: {type: 'change', name: 'city', value } })
  }

  const styles = {
    control: (css) => ({ ...css, paddingLeft: '1rem', border: '1px solid #58595B', borderRadius: '5px' }),
  };


  return (
    <Select
      onChange={handleChange}
      components={{ Control }}
      isSearchable
      placeholder='City'
      name="city"
      options={autocompleteCities}
      styles={styles}
    />
  );
};

export default CustomSelectProps;
