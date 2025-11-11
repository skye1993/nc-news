import news from '../assets/nc-news.jpeg'
function Header() {
  const title = "Northcoders News";

  return (
    <header>
      <h1>{title}</h1>
      <img src={news} />
    </header>
  );
}
export default Header;
