

const Footer = () => {
  return (
    <div className=' bg-[#263238] flex gap-[100px] mt-[150px] px-[165px] py-[64px]'>

  <div className='mr-[125px]'>
      <div className='flex'>
      <img src="/images/nex-Icon.svg" alt="nex icon" />
      <img  src="/images/Nexcent2.svg" alt="" />
      </div>
    <div className='text-[#F5F7FA]'>
      <div className='mt-[40px]'>Copyright © 2020 Nexcent ltd.</div>
      <div>All rights reserved</div>
      </div>

      <div className='flex mt-[40px] gap-[16px]'>
        <img src="/images/Social-Icons1.svg" alt="instagram" />
        <img src="/images/Social-Icons2.svg" alt="instagram" />
        <img src="/images/Social-Icons3.svg" alt="instagram" />
        <img src="/images/Social-Icons4.svg" alt="instagram" />
      </div>
  </div>






<div>
  <div>
  <div className='text-[#FFFFFF] text-[20px] font-[600]  leading-[28px] font-semibold'>Company</div>
  </div>
  <div className='text-[#F5F7FA] flex flex-col gap-[12px] mt-[24px]   text-[14px] font-[400] leading-[20px]'>
    <div>About us</div>
      <div>Blog</div>
        <div>Contact us</div>
          <div>Pricing</div>
            <div>Testimonials</div>
    </div>
</div>




<div>
  <div className='text-[#FFFFFF] text-[20px] font-[600]  leading-[28px] font-semibold'>Support</div>
  <div className='text-[#F5F7FA] mt-[24px] flex flex-col gap-[12px] text-[14px] font-[400] leading-[20px]'>
    <div>Help center</div>
      <div>Terms of service</div>
        <div>Legal</div>
          <div>Pricing</div>
            <div>Privacy policy</div>
              <div>Status</div>
      </div>
</div>





<div>
  <div  className='text-[#FFFFFF] text-[20px] font-[600]  leading-[28px] font-semibold mb-[24px]'>Stay up to date</div>
  <div className='flex items-center px-[12px] bg-[green] rounded-[8px]  '><input className='text-[#D9DBE1]  mt-[24px] text-[14px] font-[400] leading-[20px] pb-[20px]' type="email" placeholder='Send us Email' required /> <a href="https://yahoo.com"> <img src="/images/share-icon.svg" alt="" target-new/></a></div>
</div>
</div>
  )
}

export default Footer