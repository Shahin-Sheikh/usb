import { Box, Stack } from '@mui/material';
import { CustomInputLabel, BasicTextField } from '.';

const LabelWithInput = ({
  name,
  inputValue,
  placeHolder,
  labelName,
  handleChange,
  type,
  error = false,
  autoFocus = false,
  errorText = '',
  isUpdate = false,
  disable = false,
}) => (
  <Stack direction={'column'} spacing={1.5}>
    <Box
      component="label"
      htmlFor={name}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <CustomInputLabel labelName={labelName} name={name} />
    </Box>

    <Box sx={{ position: 'relative', width: '100%' }}>
      <BasicTextField
        defaultPadding
        name={name}
        value={inputValue}
        error={error}
        id={name}
        label={placeHolder}
        onChange={handleChange}
        type={type}
        autoFocus={autoFocus}
        helperText={errorText}
        isDisable={disable}
      />
    </Box>
  </Stack>
);

export default LabelWithInput;
