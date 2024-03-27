import Image from "next/image";

export const showRatingImge=(rating)=>{
    const fullStar = Math.floor(rating)
    const ratingImages = [];

    for(let i=0; i<fullStar; i++){
        ratingImages.push("./assets/svg/star.svg")
    }
    return ratingImages
}