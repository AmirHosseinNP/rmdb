import {useMemo} from "react";

export const usePagination = (totalPages, currentPage, leftSiblingCount = 1, rightSiblingCount = 2) => {
    const paginationRange = useMemo(() => {
        // Pages count is determined as siblings + firstPage + lastPage + currentPage + 2*DOTS
        const paginationTotalItems = leftSiblingCount + rightSiblingCount + 5;

        // Case 1: if the number of pages is less than the page numbers we want to show in out pagination component
        if (totalPages <= paginationTotalItems) {
            return range(1, totalPages);
        }

        // Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
        const leftSiblingIndex = Math.max(currentPage - leftSiblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + rightSiblingCount, totalPages);

        // Determine if the left or right DOTS should be displayed
        const shouldShowLeftDot = leftSiblingIndex > 2;
        const shouldShowRightDot = rightSiblingIndex < totalPages - 3;

    	// Case 2: No left dots to show, but right dots to be shown
        if (!shouldShowLeftDot && shouldShowRightDot) {
            const leftItemCount = 5;
            const leftRange = range(1, leftItemCount);
            return [...leftRange, "...", totalPages];
        }

        // Case 3: No right dots to show, but left dots to be shown
        if (shouldShowLeftDot && !shouldShowRightDot) {
            const rightItemCount = 5;
            const rightRange = range(totalPages - rightItemCount + 1, totalPages);
            return [1, "...", ...rightRange];
        }

        // Case 4: Both left and right dots to be shown
        if (shouldShowLeftDot && shouldShowRightDot) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [1, "...", ...middleRange, "...", totalPages];
        }
    }, [totalPages, currentPage, leftSiblingCount, rightSiblingCount]);

    return paginationRange;
}

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({length}, (_, i) => i + start);
}