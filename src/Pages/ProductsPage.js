import ProductsCards from "../components/ProductsCards/ProductsCards";
import usePosts from "../hooks/usePosts";
import Spinner from "../components/Spinner/Spinner";

const Products = () => {
  const { posts, loading } = usePosts();
  return (
    <>
      {/* {loading && <Spinner />} */}

      {/* ProductsCards Components */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifycontent: "space-between",
        }}
      >
        {posts.map((product) => (
          <ProductsCards
            key={product.id}
            product={product}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            rating={product.rating.rate}
            loading={loading}
          />
        ))}
      </div>
      {/* ProductsCards Components */}
    </>
  );
};

export default Products;
