"use client";

import Layout from "@/components/Layout";
import CardMedia from "@/components/card/CardMedia";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Media: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setArticles(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const loadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 6);
  };

  return (
    <Layout>
      <div className="flex justify-between md:container md:mx-auto lg:px-40">
        <div className="m-0 mb-10 w-full p-4 text-gray-900 xl:p-0 xl:pr-8">
          <div className="py-4">
            <div className="flex-grow flex-col space-y-8 px-5 py-6 md:py-20">
              <section className="mb-4 flex flex-col">
                <section className="w-fit">
                  <div className="mx-auto mb-2 flex w-[80px] justify-center rounded-full border border-b-4 border-[#4DB3C5] text-center" />
                  <h2 className="w-fit text-3xl font-bold text-[#0E0F11]">
                    Rekomendasi
                  </h2>
                </section>
                <p className="mt-2 text-gray-900">
                  Rekomendasi produk sesuai kebutuhan pembeli
                </p>
              </section>
              <section className="h-full w-full justify-self-stretch sm:flex sm:flex-row md:grid md:grid-cols-3">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  articles
                    .slice(0, visibleArticles)
                    .map((article) => (
                      <CardMedia
                        key={article.id}
                        cardId={article.id}
                        cardTitle={article.title}
                        cardImg={`https://picsum.photos/id/${article.id}/360/300`}
                        cardDescription={article.body}
                      />
                    ))
                )}
              </section>
              <button
                onClick={loadMore}
                disabled={visibleArticles >= articles.length}
                className="mt-6 w-full rounded bg-[#009EA9] px-4 py-2 text-white hover:bg-[#50bcc4] disabled:opacity-50"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
