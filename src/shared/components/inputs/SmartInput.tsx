import {IInputProps} from './Input';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import {InputWithError} from './InputWithError';

export interface ISmartInputProps<T extends FieldValues> {
  control: Control<T, any> | undefined;
  name: Path<T>;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}

export interface ISmartTextInputProps<T extends FieldValues>
  extends IInputProps,
    ISmartInputProps<T> {}

export function SmartTextInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: ISmartTextInputProps<T>) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState}) => (
        <InputWithError
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          errorMessage={fieldState.error?.message}
          {...rest}
        />
      )}
      name={name}
    />
  );
}
