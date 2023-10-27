import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'


const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>Tôi đã có một trải nghiệm tuyệt vời với tour du lịch leo núi. Hành trình đầy thách thức, nhưng với hướng dẫn xuất sắc và cảnh quan tuyệt đẹp, tôi đã tạo ra những kỷ niệm vĩ đại suốt đời.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Duy Dương</h6>
               <p>Loyal Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Tour ngắm mây thật tuyệt! Cảm ơn sự tận tâm của hướng dẫn và khám phá vẻ đẹp tuyệt đẹp của thiên nhiên. Chúng tôi đã có những giây phút tuyệt vời và kỷ niệm khó quên trong chuyến đi này.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Thắng Đồng Minh</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Chuyến tour ngắm hồ và núi thực sự tuyệt vời! Cảnh quan tuyệt đẹp, hướng dẫn tận tâm, và trải nghiệm đáng nhớ đã làm cho chuyến đi của chúng tôi trở thành một kỷ niệm vô cùng đáng giá. 
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Đạt Phạm</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Chuyến tour biển tuyệt vời! Cảnh biển tươi đẹp, hoạt động thú vị và dịch vụ xuất sắc. Chúng tôi đã tận hưởng những ngày dài trên biển và tạo ra những kỷ niệm đáng nhớ. Chắc chắn sẽ quay lại!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Vũ Bão</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials