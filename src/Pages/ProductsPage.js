import ProductsCards from "../components/ProductsCards/ProductsCards";
import usePosts from "../hooks/usePosts";
import Spinner from "../components/Spinner/Spinner";

const Products = () => {
  const { posts, loading } = usePosts();

  console.info({ posts });
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
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        {posts.map((product, index, posts) => (
          <ProductsCards key={product.id} product={product} loading={loading} />
        ))}
      </div>
    </>
  );
};

export default Products;
