'use client';

import React, {FC} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import './PaginationComponent.css'
import {roboto} from "@/fonts/roboto";
import {createQueryString} from "@/helpers/createQueryStringFn";

type Props = {
    currentPage: number,
    totalPages: number
}

const PaginationComponent: FC<Props> = ({currentPage, totalPages}) => {
    const router = useRouter();
    const pathname: string = usePathname();
    const searchParams = useSearchParams();

    const nextPageHandler = () => {
        router.replace(
            pathname + "?" + createQueryString("page", (currentPage + 1).toString(), searchParams.toString())
        );
    }
    const prevPageHandler = () => {
        router.replace(
            pathname + "?" + createQueryString("page", (currentPage - 1).toString(), searchParams.toString())
        );
    }
    return (
        <div className="pagination">
            <button onClick={prevPageHandler} disabled={currentPage < 2} className={roboto.className}>&lt;</button>
            <p className={roboto.className}>{currentPage} of {totalPages > 500 ? '500' : totalPages}</p>
            <button onClick={nextPageHandler} disabled={totalPages <= currentPage} className={roboto.className}>&gt;</button>
        </div>
    );
};

export default PaginationComponent;
