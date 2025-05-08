import { useIcon } from "~/composables/useIcon";

const { allIcons } = useIcon();

export type IconName = keyof typeof allIcons;
