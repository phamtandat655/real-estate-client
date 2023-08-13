import { memo } from 'react';

const Pagination = ({ pageIndex, setPageIndex, totalPage }) => {
    let items = [];
    for (let i = 1; i <= totalPage; i++) {
        items.push(i);
    }

    const changeIndexOfPage = (option, i) => {
        if (option === 'prev') {
            if (pageIndex <= 1) return;
            setPageIndex((prev) => prev - 1);
        } else if (option === 'next') {
            if (pageIndex >= totalPage) return;
            setPageIndex((prev) => prev + 1);
        } else {
            setPageIndex(i);
        }
    };

    return (
        <div className="w-full flex justify-center mt-3">
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li onClick={(e) => changeIndexOfPage('prev')}>
                        <button className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </button>
                    </li>
                    {items?.map((indexOfPage, index) => {
                        if (indexOfPage === pageIndex) {
                            return (
                                <li key={index}>
                                    <button
                                        aria-current="page"
                                        className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                    >
                                        {indexOfPage}
                                    </button>
                                </li>
                            );
                        } else {
                            return (
                                <li key={index} onClick={(e) => changeIndexOfPage('index', indexOfPage)}>
                                    <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        {indexOfPage}
                                    </button>
                                </li>
                            );
                        }
                    })}

                    <li onClick={(e) => changeIndexOfPage('next')}>
                        <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default memo(Pagination);
