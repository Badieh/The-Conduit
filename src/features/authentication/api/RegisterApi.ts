import { registerUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { paths } from "@/routes/AppRouter";

import { useUserStore } from "@/stores/UserStore";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

async function RegisterMutationFunction({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  return await axiosClient.post(registerUrl, {
    user: {
      email: email,
      password: password,
      username: username,
    },
  });
}
export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: RegisterMutationFunction,

    onError: (error: any) => {
      toast.error(error.response.data.errors.body);
    },
    onSuccess: (data) => {
      useUserStore.setState({ user: data.data.user });
      navigate(paths.home.getHref());
      toast.success(`Hello ${data.data.user.username}, welcome to Conduit!`);
    },
  });
};
