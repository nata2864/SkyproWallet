import * as S from "./Button.styled";

export default function Button({children, ...props}) {
  return <S.Button {...props}>{children}</S.Button>;
}
