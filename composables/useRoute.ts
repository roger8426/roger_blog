export const usePageKey = (to: ReturnType<typeof useRoute>) => {
  const name = to?.name?.toString() ?? "index";
  return name.split("__")[0];
};
