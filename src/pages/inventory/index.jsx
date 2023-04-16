import useInventoryPage from "../../hooks/useInventoryPage";
import Layout from "../../components/layout";

const InventoryPage = () => {
  const { title, responseApi, updated, setUpdated, releasedPokemon } = useInventoryPage();
  const { data } = responseApi;
  
  return (
    <Layout title={title}>
      <section className="containt-list">
        {data?.map((item, idx) => (
          <div className="item" onClick={async() => {
            await releasedPokemon(item?.data?.id)
            await setUpdated(!updated);
          }}>
            <img
              src={item?.images}
              alt={`img-${item?.name}`}
            />
            <span style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
              {item?.nickname || item?.data?.name}
            </span>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default InventoryPage;
