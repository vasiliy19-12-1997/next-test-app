import { FC, PropsWithChildren } from "react";

interface IMyButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
}
const MyButton: FC<PropsWithChildren<IMyButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};
export default MyButton;