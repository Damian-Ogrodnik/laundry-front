export const sortByDates = async bookings => {
  return await bookings.sort((aBooking, bBooking) => {
    let aArray = aBooking.date.split("-");
    let bArray = bBooking.date.split("-");
    return (
      new Date(bArray[2], bArray[1] - 1, bArray[0]) -
      new Date(aArray[2], aArray[1] - 1, aArray[0])
    );
  });
};
