export const priceAfterDiscount = (originalPrice, discountPercent) =>{
    const discountAmount = originalPrice * (discountPercent /100);
    return (originalPrice - discountAmount).toFixed(2)
}