import { loginUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { paths } from "@/routes/AppRouter";

import { useUserStore } from "@/stores/UserStore";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

async function loginMutationFunction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await axiosClient.post(loginUrl, {
    user: {
      email: email,
      password: password,
    },
  });
}
export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginMutationFunction,

    onError: (error: any) => {
      console.log(error.response.data.errors.body);
      toast.error(error.response.data.errors.body);
    },
    onSuccess: (data) => {
      console.log(data.data);
      useUserStore.setState({ user: data.data.user });
      navigate(paths.home.getHref());
      toast.success(`Hello ${data.data.user.username}, welcome to Conduit!`);
    },
  });
};
