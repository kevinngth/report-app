import truncateText from "../util/truncateText";

export default function TableRow({ report }) {
    const {
        id,
        title,
        dateCreated,
        username,
        content,
        status,
        approvedTimestamp,
    } = report;
    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            {username}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{title}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {truncateText(report.content, 10)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dateCreated}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Approved
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {approvedTimestamp}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    Edit
                </a>
            </td>
        </tr>
    );
}

// <Date dateString={report.dateCreated} />
//         <h3>{report.title} &rarr;</h3>
//         <p>{truncateText(report.content, 30)}</p>
