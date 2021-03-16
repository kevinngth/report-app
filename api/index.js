const { reports } = require("../util/const");

async function fetchAll() {
    return reports;
}

async function fetchPaths() {
    const paths = reports.map((report) => {
        return {
            params: {
                id: report.id,
            },
        };
    });
    return paths;
}

module.exports = { fetchAll, fetchPaths };
