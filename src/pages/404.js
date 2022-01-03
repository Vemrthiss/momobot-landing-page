import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MainButton from "../components/MainButton";

const NotFoundPage = () => {
    return (
        <main className="error">
            <title>Page Not Found</title>
            <div className="error__container">
                <StaticImage src="../assets/404_banner.png"
                            alt="404 banner"
                            className="error__banner"/>
                <MainButton customClasses="px-4 lg:px-6 py-2 lg:py-3 mt-5 uppercase text-sm lg:text-lg">
                    <Link to="/">back to home</Link>
                </MainButton>
            </div>
        </main>
    )
}

export default NotFoundPage;