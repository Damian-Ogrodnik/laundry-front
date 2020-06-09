export const checkAvailability = async (date, lastBooking) => {
  let available = true;
  if (date) {
    const today = new Date().setHours(0, 0, 0, 0);
    const [day, month, year] = date.split("-");
    const bookDate = new Date(year, month - 1, day).setHours(0, 0, 0, 0);
    if (today === bookDate && lastBooking <= new Date().getHours())
      available = false;
  }
  return available;
};

export const standarizeDate = (date) =>
  `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}`;

export const sortByDates = async (bookings) => {
  const sortedBookings = await bookings.sort((aBooking, bBooking) => {
    const [aDay, aMonth, aYear] = aBooking.date.split("-");
    const [bDay, bMonth, bYear] = bBooking.date.split("-");
    return (
      new Date(bYear, bMonth - 1, bDay) - new Date(aYear, aMonth - 1, aDay)
    );
  });
  return await removeOldDates(sortedBookings);
};

const removeOldDates = async (bookings) =>
  await bookings.filter((booking) => {
    const [day, month, year] = booking.date.split("-");
    return new Date(year, month - 1, day) >= new Date().setHours(0, 0, 0, 0);
  });
