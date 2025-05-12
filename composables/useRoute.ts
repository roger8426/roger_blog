export const usePageKey = () => {
  const route = useRoute();
  const name = route.name?.toString() ?? "unknown";

  return name.split("___")[0];
};
