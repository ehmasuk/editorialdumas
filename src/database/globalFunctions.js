const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${day} ${month}, ${year}`;
    return formattedDate;
};

const daysRemaining = (targetDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const endDate = new Date(targetDate);
    const remainingTime = endDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(remainingTime / oneDay);
    return remainingDays;
};


export { formatDate,daysRemaining };
