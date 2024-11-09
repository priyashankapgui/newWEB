import React from "react";
import Layout from "../../Components/Layout/Layout";
import ProductCards from "../../Components/productCards/productCards";


function HomePage() {
  return (
    <>
      <Layout>
        <div>
          <ProductCards />

        </div>
        
      </Layout>
    </>
  );
}

export default HomePage;
