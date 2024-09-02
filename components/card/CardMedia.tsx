import React from "react";

interface CardMediaProps {
  cardId: number;
  cardImg: string;
  cardTitle: string;
  cardDescription: string;
}

const CardMedia: React.FC<CardMediaProps> = ({
  cardId,
  cardImg,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div className="mb-4 p-4 md:mb-6">
      <section className="relative flex h-full w-full">
        <a
          className="flex h-full w-full appearance-none flex-col space-y-4 text-gray-900"
          href={`https://jsonplaceholder.typicode.com/posts/${cardId}`}
          rel="noopener noreferrer"
        >
          <figure className="relative w-full self-center overflow-hidden rounded-lg bg-gray-100">
            <img
              alt={cardTitle}
              className="w-full rounded-md object-cover"
              src={cardImg}
              sizes="100vw"
              data-nimg="fill"
            />
          </figure>
          <section className="mt-4 space-y-2">
            <h3 className="line-clamp-2 text-xl font-bold text-gray-900">
              {cardTitle}
            </h3>
            <article className="min-h-24 w-full text-justify text-gray-600">
              <div className="line-clamp-4">{cardDescription}</div>
            </article>
          </section>
        </a>
      </section>
    </div>
  );
};

export default CardMedia;
