const stringMonth = [
    "Enero", "Febrero", "Marzo", 
    "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"]

const standardDate = (dateList) => {
    let day = dateList[0];
    let month = stringMonth[dateList[1] - 1];
    let year = dateList[2];
    return month + " " + day + ", " + year;
}

export const getStartDay = (month, year) => {
    const date = new Date(year, month-1, 1);
    return date.getDay();
}

export default standardDate;