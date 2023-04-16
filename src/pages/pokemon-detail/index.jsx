import Layout from "../../components/layout";
import usePokemonDetail from "../../hooks/usePokemonDetail";

const PokemonDetailPage = () => {
  const { title, responseApi } = usePokemonDetail();
  const { data } = responseApi;
  // console.log("data", Object.keys(data?.sprites));
  return (
    <Layout title={title || "Pokemon Detail"}>
      <div className="containt-detail">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`}
          className="img-pokemon"
          alt={data?.species?.name}
        />
        <div className="sprite-pokemon">
          {data?.sprites &&
            Object.keys(data?.sprites)?.map(
              (key, idx) =>
                data?.sprites[key] &&
                typeof data?.sprites[key] === "string" && (
                  <div className="item-img">
                    <img src={data?.sprites[key]} alt="..." />
                  </div>
                )
            )}
        </div>
        <div className="information-2">
          <div className="item-information">
            <h5 className="title">Characteristic</h5>
            <ul className="list">
              <li>Name : {data?.species?.name}</li>
              <li>Height : {data?.height} cm</li>
              <li>weight: {data?.weight} kg</li>
            </ul>
          </div>
          <div className="item-information">
            <h5 className="title">Abilities</h5>
            <ul className="list">
              {data?.abilities?.map((item, idx) => (
                <li>{item?.ability?.name}</li>
              ))}
            </ul>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "auto",
              paddingTop: "1em",
              paddingBottom: "1em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                width: "100%",
                backgroundColor: "aliceblue",
                padding: "1em",
                border: "none",
              }}
            >
              Tangkap
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonDetailPage;
