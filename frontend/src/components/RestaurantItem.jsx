function RestaurantItem({ restaurant }) {
  if (!!!restaurant) return;
  return (
    <div className="text-center flex flex-col ml-10 max-sm:ml-0 max-sm:py-5 border-2 hover:border-[#034275]  shadow-[#3c8eb8]  gap-5 shadow-xl rounded-3xl hover:p-2 p-1 hover:animate-pulse hover:cursor-pointer transition-all duration-500">
      <div className="p-5">
        <img
          src={restaurant.logo}
          alt={restaurant.title}
          className="rounded-[50%] w-[150px] border-b-2 border-[#034275] "
        />
      </div>
      <div className="text-lg text-left px-5 flex flex-col py-10">
        <div className="flex align-middle gap-2 flex-wrap flex-col w-40 h-[250px]">
          <div className="text-center flex flex-col gap-5">
            <h1 className="text-2xl first-letter:capitalize">
              {restaurant.title}
            </h1>
            <h4>{restaurant.type}</h4>
            <hr />
            <h5>
              Rating:{" "}
              {restaurant.rate <= 2
                ? "Bad"
                : restaurant.rate >= 3
                ? "Decent"
                : restaurant.rate >= 4
                ? "Amazing"
                : ""}
            </h5>
          </div>
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
