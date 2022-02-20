import RepositoryItem from "../repository item/repositoryItem";
import * as S from "./style";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>

      <S.WrapperTabPanel>
        <RepositoryItem
          name="Binary-To-Decimal-"
          linkToRepo="https://github.com/VictorPMello/Binary-To-Decimal-"
          fullName="VictorPMello/Binary-To-Decimal-"
        />
      </S.WrapperTabPanel>

      <S.WrapperTabPanel>
        <RepositoryItem
          name="DesignDeSobrancelhas"
          linkToRepo="https://github.com/VictorPMello/DesignDeSobrancelhas"
          fullName="VictorPMello/DesignDeSobrancelhas"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
