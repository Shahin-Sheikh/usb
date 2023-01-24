import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { red } from '@mui/material/colors';

const CustomBorderTextField = styled(TextField)(
  ({ error, defaultpadding }) => ({
    '& label.Mui-focused': {
      color: error ? red[500] : '',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: error ? red[500] : '',
      },
    },
    '& .MuiInputBase-input': {
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: 'Lato',
      letterSpacing: 0.3,
      padding: defaultpadding ? '' : '10px 14px',
    },
    '& label': {
      lineHeight: defaultpadding ? '' : 1,
    },
  })
);

export default function BasicTextField({
  label,
  id,
  type,
  name = '',
  value,
  onChange,
  error,
  defaultPadding = '',
  autoFocus = false,
  helperText,
  isDisable,
}) {
  return (
    <>
      <CustomBorderTextField
        disabled={isDisable}
        fullWidth
        label={label}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        error={Boolean(error)}
        defaultpadding={String(defaultPadding)}
        autoFocus={autoFocus}
        helperText={helperText}
      />
    </>
  );
}
