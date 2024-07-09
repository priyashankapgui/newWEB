import React, { useState } from "react";
import "./Home.css";
import Layout from "../../Components/Layout/Layout";
import MainSpinner from "../../Components/Spinner/MainSpinner/MainSpinner";

export default function Home() {
    const [loading, setLoading] = useState(true);
    return (
        <>
        <div className="home">
            {loading ? (
                <MainSpinner />
            ) : (
                <Layout>
                    <div className="home__container">
                        <div className="home__container__title">Welcome to the home page</div>
                    </div>

                </Layout>
            )}
        </div>
        </>
    );
    
}
