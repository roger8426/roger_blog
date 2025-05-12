/**
 * @description 更新 meta 資訊
 * @param title meta的標題
 * @param desc meta的描述
 */
export const useMeta = (title: string, desc?: string) =>
  useSeoMeta({
    title,
    description: desc,
    ogTitle: title,
    ogDescription: desc,
  });

/**
 * @description 取得當前頁面的 meta 資訊
 * @returns { title: string, desc: string }
 */

export const getMeta = (): {
  title: string;
  desc: string;
} => {
  const route = useRoute();
  const key = usePageKey(route);
  const nuxtApp = useNuxtApp();
  const t = nuxtApp.$i18n.t;

  const title = t(`${key}.meta.title`) || "";
  const desc = t(`${key}.meta.description`) || "";

  return {
    title,
    desc,
  };
};
