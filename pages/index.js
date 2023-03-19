const Home = (props) => {
  const { joke } = props;
  console.log("[ui-auth] [Home] --- props ", props);

  return (
    <div>
      <h1>This is from UI Auth SSR App</h1>
      <div>{joke.value}</div>
    </div>
  )
}

Home.getInitialProps = async ctx => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await res.json();
  console.log("[ui-auth] [Home][getInitialProps] --- joke ", joke);
  return { joke };
};

export default Home;