export const sortByDates = async bookings => {
  let sortedBookings = await bookings.sort((aBooking, bBooking) => {
    let aArray = aBooking.date.split("-");
    let bArray = bBooking.date.split("-");
    return (
      new Date(bArray[2], bArray[1] - 1, bArray[0]) -
      new Date(aArray[2], aArray[1] - 1, aArray[0])
    );
  });

  return await removeOldDates(sortedBookings);
};

const removeOldDates = async bookings => {
  return await bookings.filter(booking => {
    let bookingArray = booking.date.split("-");
    return (
      new Date(bookingArray[2], bookingArray[1] - 1, bookingArray[0]) >
      new Date()
    );
  });
};
