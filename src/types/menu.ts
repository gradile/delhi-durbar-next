export interface MenuButton {
  label: string;
  href: string;
  className?: string;
}

export interface MenuSection {
  title: string;
  buttons: MenuButton[];
}