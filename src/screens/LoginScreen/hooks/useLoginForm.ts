import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

const loginFormSchema = z.object({
  email: z.string().email().nonempty('Email é obrigatório'),
  password: z.string().nonempty('Senha é obrigatório'),
});

export type ILoginForm = z.infer<typeof loginFormSchema>;

interface IUseLoginFormProps {
  onSubmit: (data: ILoginForm) => void;
}

export function useLoginForm({onSubmit}: IUseLoginFormProps) {
  const {control, handleSubmit} = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(loginFormSchema),
  });

  const submitForm = handleSubmit(onSubmit);

  return {control, submitForm};
}
