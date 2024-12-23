import { useNavigate } from 'react-router-dom';
import { registration } from '@api/queries/auth';
import { useTypedDispatch } from '@store/baseHooks';
import { setUser } from '@store/user/slice';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для регистрации пользователя
 * @returns Объект запроса для регистрации
 */

export const useRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const regMutation = useMutation({
    mutationFn: (values: Parameters<typeof registration>[0]) => registration(values),
    onSuccess: (data) => {
      dispatch(setUser(data.data.token));
      navigate('/profile');
    }
  });

  return regMutation;
};
