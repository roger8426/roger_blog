export default defineNuxtRouteMiddleware((to, from) => {
  const key = usePageKey(to);
  const nuxtApp = useNuxtApp();
  const t = nuxtApp.$i18n?.t ?? ((key: string) => key);

  if (key) {
    useMeta(t(`${key}.meta.title`), t(`${key}.meta.description`));
  }
});
