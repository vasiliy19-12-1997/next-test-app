import { FC, PropsWithChildren } from "react";

interface IMyInputProps {}

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
