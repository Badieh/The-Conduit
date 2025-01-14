import { updateUserUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { paths } from "@/routes/AppRouter";
import { useUserStore } from "@/stores/UserStore";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

async function settingMutationFunction({
  email,
  username,
  password,
  bio,
  image,
}: {
  email: string;
  username: string;
  password: string;
  bio?: string;
  image?: string;
}) {
  return await axiosClient.put(updateUserUrl, {
    user: {
      email: email,
      password: password,
      username: username,
      bio: bio,
      image: image,
    },
  });
}
export const useSettingMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["updateUser"],
    mutationFn: settingMutationFunction,
    onError: (error: any) => {
      toast.error(error.response.data.errors.body);
    },
    onSuccess: (data) => {
      useUserStore.setState({ user: data.data.user });
      toast.success("User Info Updated successfully");
      navigate(paths.home.getHref());
    },
  });
};
