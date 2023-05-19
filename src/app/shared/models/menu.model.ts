export interface MenuItemInterface {
  key: string;
  label: string;
  icon?: string,
  children?: MenuItemInterface[];
}
