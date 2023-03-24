function RestaurantItem({ restaurant }) {
  if (!!!restaurant) return;
  return (
    <div className="flex flex-col p-5 m-5 text-center border-2 hover:border-[#034275]  shadow-[#3c8eb8] shadow-xl rounded-3xl hover:-translate-y-2 hover:animate-pulse hover:cursor-pointer transition-all duration-500">
      <img
        src={restaurant.logo}
        alt={restaurant.title}
        className="rounded-[50%] w-[150px] border-b-2 border-[#034275] self-center"
      />
      <div className="flex flex-col w-56 h-[300px] justify-center align-middle gap-2">
        <h1 className=" first-letter:capitalize">{restaurant.title}</h1>
        <hr className="h-1 bg-gray-300 m-2 rounded-full" />
        <h4>{restaurant.type}</h4>
        <hr className="h-1 bg-gray-300 m-2 rounded-full" />
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
        {restaurant.discount ? <h5 className="opacity-80">🔥 Discount</h5> : ""}
      </div>
    </div>
  );
}

export default RestaurantItem;
