module.exports = {
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_date_day_of_week: (date) => {
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString(undefined, options);
        const day = new Date(date).getDate();
        let suffix;

        if (day >= 11 && day <= 13) {
            suffix = 'th';
        } else {
            switch (day % 10) {
                case 1:
                    suffix = 'st';
                    break;
                case 2:
                    suffix = 'nd';
                    break;
                case 3:
                    suffix = 'rd';
                    break;
                default:
                    suffix = 'th';
            }
        }
        return formattedDate.replace(/\b\d+\b/, (match) => match + suffix);
    },
    toTitleCase: (str) => {
        let words = str.replace("_", " ").split(" ");
        let titleCaseWords = words.map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let titleCaseStr = titleCaseWords.join(" ");
        return titleCaseStr;
    },
    addHelper: (a, b) => {
        return a + b;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    },

    addPossessiveSuffix: (name) => {
        if (name.endsWith('s')) {
            return name + "'";
        } else {
            return name + "'s";
        }
    },
};