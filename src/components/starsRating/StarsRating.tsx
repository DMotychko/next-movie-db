'use client'
import React, {FC} from 'react';
import ReactStars from "react-rating-star-with-type";

type Props = {
    rating: number
}
const StarsRating: FC<Props> = ({rating}) => {
    return (
        <div>
            <ReactStars
                count={10}
                value={rating}
                isEdit={false}
            />
        </div>
    );
};

export default StarsRating;