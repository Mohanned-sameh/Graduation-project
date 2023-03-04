function RestaurantItem({ restaurant }) {
  // const { restaurants } = restaurant;
  if (!!!restaurant) return;
  return (
    <div className="text-center flex flex-col ml-10 max-sm:ml-0 max-sm:py-5 border-2 border-green-500  gap-5 shadow-xl rounded-3xl shadow-slate-500 hover:p-2 p-1 hover:animate-pulse hover:cursor-pointer transition-all duration-500">
      <div className="p-5">
        <img
          src={restaurant.logo}
          alt={restaurant.title}
          className="rounded-full w-40 border-b-2 border-green-500 "
        />
      </div>
      <div className="text-lg text-left px-5 py-2">
        <div className="flex flex-col align-middle justify-evenly gap-2">
          <h1>Title: {restaurant.title}</h1>
          <h4>Type: {restaurant.type}</h4>
          <h5 className=" ">
            Rating:{" "}
            {restaurant.rate <= 2 ? "😥" : restaurant.rate === 3 ? "🙂" : "❤️‍🔥"}
          </h5>
        </div>
        {restaurant.discount ? (
          <h5 className=" mt-4 text-base opacity-80 text-center">
            🔥 Discount
          </h5>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default RestaurantItem;
