import ProductsCards from "../components/ProductsCards/ProductsCards";
import usePosts from "../hooks/usePosts";
import Spinner from "../components/Spinner/Spinner";

const Products = () => {
  const { posts, loading } = usePosts();

  console.info({ loading });
  return (
    <>
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifycontent: "space-between",
        }}
      >
        {posts.map((product) => (
          <ProductsCards key={product.id} product={product} loading={loading} />
        ))}
      </div>
    </>
  );
};

export default Products;
