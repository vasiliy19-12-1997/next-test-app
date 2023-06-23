import { FC, PropsWithChildren } from "react";

interface IMyInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<PropsWithChildren<IMyInputProps>> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default MyInput;
