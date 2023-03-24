function RestaurantItem({ restaurant }) {
  if (!!!restaurant) return;
  return (
    <div className="flex flex-wrap flex-col ml-5 w-[260px] p-2 my-2 h-[100%] max-sm:ml-0 max-sm:py-5 border-2 hover:border-[#034275]  shadow-[#3c8eb8] shadow-xl rounded-3xl hover:-translate-y-2 hover:animate-pulse hover:cursor-pointer transition-all duration-500">
      <img
        src={restaurant.logo}
        alt={restaurant.title}
        className="rounded-[125px] max-w-[150px] border-b-2 border-[#034275] self-center m-10"
      />
      <hr className="h-1 bg-slate-400 rounded-full opacity-40" />
      <div className="text-lg text-left m-auto">
        <div className="flex flex-col align-middle gap-5 w-full text-center">
          <h1>{restaurant.title}</h1>
          <h4>{restaurant.type}</h4>
          <h5>
            Rating:{" "}
            {restaurant.rate <= 2
              ? "Bad"
              : restaurant.rate > 2
              ? "Decent"
              : restaurant.rate >= 3
              ? "Amazing"
              : ""}
          </h5>
          {restaurant.discount ? (
            <h5 className="text-base opacity-80 text-center">🔥 Discount</h5>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantItem;
