export type NavItemType = {
    label: string;
    subLabel?: string;
    children?: Array<NavItemType>;
    href?: string;
};
