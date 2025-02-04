import React from 'react'

export default function RoughWork() {
  return (
    <>
     {/* Right */}
     <div className='max-w-[492px] h-auto rounded '>
                <div className="bg-background dark:bg-background p-4 rounded">
                    {/* Rental Summary */}
                    <div>
                        <h1 className='text-[20px] font-bold'>Rental Summary</h1>
                        <p className='text-[14px] font-medium text-muted-foreground dark:text-muted-foreground'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </div>
                    {/* Image, Name rating and count */}
                    <div className='flex justify-center items-center gap-2 my-4'>
                        <div>
                            <Image src={data.image} alt={data.name} width={200} height={200}/>
                        </div>
                        <div className="">
                            <h1 className='lg:text-[32px] text-[20px] font-bold'>{data.name}</h1>
                            <div className='flex justify-start items-center gap-1 lg:flex-row flex-col'>
                                <span className='flex justify-center items-center'>
                                    <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                </span>
                                <span className='text-[14px] font-medium text-muted-foreground'>{data.ratingCount}+ Reviews</span>    
                            </div>
                        </div>                        
                    </div>
                    {/* Subtotal and Tax */}
                    <div className=' border-t-2 border-black/10 '>
                        <div className='flex justify-between mt-4 items-center'>
                            <p className='text-[12px] font-semibold text-muted-foreground dark:text-muted-foreground'>Subtotal</p>
                            <p className='text-[16px] font-semibold'>$ {data.rent}.00</p>
                        </div>
                        <div className='flex justify-between  items-center'>
                            <p className='text-[12px] font-semibold text-muted-foreground dark:text-muted-foreground'>Tax</p>
                            <p className='text-[16px] font-semibold'>$0</p>
                        </div>
                    </div>
                    {/* Coupon code and Button */}
                    <div className='flex items-center justify-center gap-2 my-4'>
                        <Input type='text' className='border-none bg-primary-foreground dark:bg-primary-foreground pl-2 rounded text-[#90A3BF] text-[14px] font-medium' placeholder='Apply Promo Code'/>
                        <Button className=' rounded px-2 py-2 text-[12px] font-semibold'>Apply now</Button>
                    </div>
                    {/* Total Rental Price */}
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='lg:text-[20px] text-[16px] font-bold'>Total Rental Price per Day</h1>
                            <p className='text-muted-foreground dark:text-muted-foreground text-[14px] font-medium'>Overall price and includes rental discount</p>
                        </div>
                        <h1 className='lg:text-[32px] text-[24px] font-bold'>${data.rent}.00</h1>
                    </div>
                </div>
    </div>
    </>
  )
}
