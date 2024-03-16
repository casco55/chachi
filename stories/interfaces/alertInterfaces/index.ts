export interface AlertProps {
  text: string;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  icon?: React.ReactNode;
}
