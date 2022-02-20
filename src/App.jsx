import useGithub from "./hooks/githubHooks";

import Layout from "./components/layout/Layout";
import NoSearch from "./components/no-search/NoSearch";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/Repositories";

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
