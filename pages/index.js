import HomePage from "../Src/view/HomePage/HomePage";

      

export default function Home({products}) {
  return (
    <div>
      this is home page
      <HomePage products = {products} />
      {/* {
        products.map(product => (
         <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
         </>
        ))
      } */}
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};
