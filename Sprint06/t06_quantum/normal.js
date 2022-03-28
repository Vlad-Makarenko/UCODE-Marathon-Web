
class NTime {
    calculateTime() {
        const differenceDate = new Date(new Date() - new Date('01.01.1939'));

        var calcFormatTmp = differenceDate.getDate() + '-' + (differenceDate.getMonth() + 1) + '-' + differenceDate.getFullYear();

        var calcFormat = calcFormatTmp.split("-");

        const days = parseInt(Math.abs(calcFormat[0]) - 1);
        const months = parseInt(Math.abs(calcFormat[1]) - 1);
        const years = parseInt(Math.abs(calcFormat[2] -   1970));

    
        return {
            year: years,
            month: months,
            day: days,
            years(){
                return this.year;
            },

            days() {
                return this.day;
            },

            months(){
                return this.month;
            }
        }
    }

}

module.exports = new NTime();

  


