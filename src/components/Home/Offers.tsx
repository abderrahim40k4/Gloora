import React from 'react'

interface SpecialOffer {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
}

const Offers = () => {
  const specialOffers: SpecialOffer[] = [
    {
      id: 1,
      title: "50% Off on All Shoes",
      description: "Get 50% discount on all our shoe collection for a limited time.",
      discountPercentage: 50,
    },
    {
      id: 2,
      title: "Buy One Get One Free - T-Shirts",
      description: "Buy one t-shirt and get another one absolutely free!",
      discountPercentage: 50,
    },
    {
      id: 3,
      title: "30% Discount on Electronics",
      description: "Save big on all electronic items with a 30% discount.",
      discountPercentage: 30,
    },
    {
      id: 4,
      title: "30% Discount on Electronics",
      description: "Save big on all electronic items with a 30% discount.",
      discountPercentage: 30,
    }
  ];

  return (
    <div className="lg:p-10 px-5 py-8 m-auto lg:py-5 w-full">
      <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-12 self-stretch content-between">
        {
          specialOffers.map((offer, index) => (
            <div
              key={index}
              className={`${index === 0 ? "md:col-span-3 h-[356px] md:h-[625px]" : "h-[420px]"} col-span-1 rounded-3xl bg-baseColor`}
            >
              {/* You can include the content of the offer here */}
              <h2 className="text-lg font-bold">{offer.title}</h2>
              <p className="text-sm">{offer.description}</p>
              <p className="text-sm">Discount: {offer.discountPercentage}%</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Offers;
