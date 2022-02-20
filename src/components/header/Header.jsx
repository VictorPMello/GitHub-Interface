import { useState } from "react";
import useGithub from "../../hooks/githubHooks";
import * as S from "./style";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGtUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder="Digite o username para pesquisa:"
        onChange={submitGtUser}
      />
      <button type="submit">Buscar</button>
    </S.Wrapper>
  );
};

export default Header;
