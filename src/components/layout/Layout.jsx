import Header from "../header/Header";
import * as S from "./style";

const Layout = ({ children }) => {

  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
