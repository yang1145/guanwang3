import React from 'react';

export default function ContactInfo() {
  return (
    <div className="lg:w-1/2">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">联系信息</h2>
      
      <div className="space-y-8">
        {/* Address */}
        <div className="flex">
          <div className="mr-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">公司地址</h3>
            <p className="text-gray-600">中国某地纺织工业园区</p>
            <p className="text-gray-600">邮编: 123456</p>
          </div>
        </div>
        
        {/* Phone */}
        <div className="flex">
          <div className="mr-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">联系电话</h3>
            <p className="text-gray-600">总机: 010-12345678</p>
            <p className="text-gray-600">传真: 010-87654321</p>
            <p className="text-gray-600">手机: 138-0000-0000</p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex">
          <div className="mr-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">电子邮箱</h3>
            <p className="text-gray-600">销售咨询: sales@huafang.com</p>
            <p className="text-gray-600">技术支持: support@huafang.com</p>
            <p className="text-gray-600">合作洽谈: cooperation@huafang.com</p>
          </div>
        </div>
        
        {/* Working Hours */}
        <div className="flex">
          <div className="mr-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">工作时间</h3>
            <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
            <p className="text-gray-600">周六: 9:00 - 12:00</p>
            <p className="text-gray-600">周日及法定节假日: 休息</p>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-gray-800 mb-4">公司位置</h3>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
      </div>
    </div>
  );
}