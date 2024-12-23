import { axiosClient } from '../../client';

export const login = async (values: { username: string; password: string }): Promise<any> => {
  return axiosClient.post(`auth/sign-in`, {
    username: values.username,
    password: values.password
  });
};

export const registration = async (values: {
  username: string;
  password: string;
  email: string;
}): Promise<any> => {
  return axiosClient.post(`/register/`, {
    username: values.username,
    password: values.password,
    email: values.email,
    user_type: 'regular'
  });
};
