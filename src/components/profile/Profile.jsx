import useGithub from "../../hooks/githubHooks";
import * as S from "./style";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatar}
        alt="Avatar of user"
      />

      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>
          {/* WrapperUserGeneric */}
          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric>
          {/* WrapperUserGeneric */}
          <S.WrapperUserGeneric>
            <h3>Locantion:</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserGeneric>
          {/* WrapperUserGeneric */}
          <S.WrapperUserGeneric>
            <h3>Blog/Linkedin:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
          {/* WrapperUserGeneric */}
        </div>
        {/* div */}

        <S.WrapperStatusCount>
          <div>
            <h4>Follwers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          {/* div */}
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
          {/* div */}
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          {/* div */}
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
          {/* div */}
        </S.WrapperStatusCount>
        {/* WrapperStatusCount */}
      </S.WrapperInfoUser>
      {/* WrapperInfoUser */}
    </S.Wrapper>
  );
};

export default Profile;
