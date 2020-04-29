export const sortByDates = async (bookings) => {
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

const removeOldDates = async (bookings) => {
  return await bookings.filter((booking) => {
    let [day, month, year] = booking.date.split("-");
    return new Date(year, month - 1, day) >= new Date().setHours(0, 0, 0, 0);
  });
};

export const checkAvailability = async (date, lastBooking) => {
  let available = true;
  if (date) {
    let today = new Date().setHours(0, 0, 0, 0);
    const [day, month, year] = date.split("-");
    let bookDate = new Date(year, month - 1, day).setHours(0, 0, 0, 0);
    if (today === bookDate && lastBooking <= new Date().getHours())
      available = false;
  }
  return available;
};

export const standarizeDate = async (date) => {
  return `${await date.getUTCDate()}-${
    (await date.getUTCMonth()) + 1
  }-${await date.getUTCFullYear()}`;
};
