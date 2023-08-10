import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [1, 2, 3] }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                        CATEGORIES
                    </h2>
                    
                </div>
                <div className="flex flex-wrap -m-4">
                    {cards?.map((card) => {
                        return (
                            <Link
                               
                                to={`/categories/${card}`}
                                className="p-3 md:w-1/4 cursor-pointer"
                            >
                                <div className="flex rounded-lg h-full bg-gray-100 p-5 flex-col border border-pink-500 shadow-md hover:shadow-lg hover:bg-pink-200 transition duration-300 shadow-lg">
                                    <div className="flex items-center mb-3">
                                        <h2 className="text-gray-800 text-2xl title-font capitalize">
                                            {card || "Example card"}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeatureCard;
