const { reports } = require("../util/const");

function fetchAll() {
    return reports;
}

function fetchPaths() {
    const paths = reports.map((report) => {
        return {
            params: {
                id: report.id,
            },
        };
    });
    return paths;
}

function getReport(id) {
    const result = reports.filter((report) => report.id === id);
    return result;
}

module.exports = { fetchAll, fetchPaths, getReport };
