export const useMeta = (title: string, desc?: string) => {
  useSeoMeta({
    title,
    description: desc,
    ogTitle: title,
    ogDescription: desc,
  });
};
