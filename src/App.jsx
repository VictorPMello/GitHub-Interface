import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/Repositories";
import useGithub from "./hooks/githubHooks";

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? <> 
        {githubState.loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </> : <div>Nenhum usuário pesquisado</div> }
      
    </Layout>
  );
};

export default App;
