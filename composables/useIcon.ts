export const useIcon = () => {
  const modules = import.meta.glob("~/assets/icons/*.svg", {
    import: "default",
    eager: true,
  });

  const icons: Record<string, any> = {};

  for (const path in modules) {
    const fileName = path.split("/").pop()!.replace(".svg", "");
    icons[fileName] = modules[path];
  }

  return {
    getIcon: (name: string) => icons[name] || null,
    allIcons: icons,
  };
};
