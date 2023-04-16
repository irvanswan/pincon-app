import useHomePage from "../../hooks/useHomePage";
import Layout from "../../components/layout";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { title, responseApi, setMeta, meta } = useHomePage();
  const { data } = responseApi;

  return (
    <Layout title={title}>
      <section className="containt-list">
        {data?.map((item, idx) => (
          <Link relative="..." to={`/${item?.name}`} className="item">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                idx +   1
              }.png`}
              alt={`img-${item?.name}`}
            />
            <span style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
              {item?.name}
            </span>
          </Link>
        ))}
        <button
          className="btn-load-more"
          onClick={() => setMeta({ ...meta, offset: meta?.offset + meta?.limit })}
        >
          Load More
        </button>
      </section>
    </Layout>
  );
};

export default HomePage;
