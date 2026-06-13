function getFormattedDate(dateString) {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.toLocaleDateString('en-US', { 
    timeZone: 'UTC', 
    month: 'long' 
  });
  const year = date.getUTCFullYear();
  return `${day} ${month}, ${year}`;
}

export default getFormattedDate;