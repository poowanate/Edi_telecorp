import * as react from 'react'
import  {useEffect,useState} from 'react'
import Link from 'next/link'
 import { removeCookie } from '../api/auth'
import jscookie from 'js-cookie';
import { useRouter } from 'next/router'
const Layout =(props) => {
  const [closeprofile,setcloseprofile] =  useState(false);
  const [nameuser,setnameuser] =  useState('2');
  const [role,setrole] =  useState(0);
  const Router = useRouter();
  const fetchData = async () => {
     if(nameuser == '1'){
      setrole(1)
     }
     if(nameuser == '2'){
      setrole(2)
     }
    setnameuser(jscookie.get('name'))
console.log(jscookie.get('role'))
    if(jscookie.get('role') =='0'){
      console.log('ggpw')
      setrole(3)
    }
    else if(jscookie.get('role')=='1'){
      setrole(2)
    }
    else if(jscookie.get('role')=='2'){
      setrole(1)
    }
   
    if(jscookie.get('name')==null){
     Router.push('/Login')
    }


};

useEffect(() => {

  

  fetchData();
  
} ,[]

);

  const logout =()=>{
    removeCookie('name')
    Router.push('/Login')
  }

var color =''
  if(role == 1){
    color = 'bg-indigo-800'
  }
  if(role == 2){
    color = 'bg-pink-700'
  }
 
  // '+{role}+'
  var classnamepo = 'text-gray-300  hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  var classnameinvoice = 'text-gray-300  hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  var classnamesend = 'text-gray-300  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  var classnameposell = 'text-gray-300  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  if(props.children!= 'ddd'){
  if(props.children.props == undefined){
   
      classnamesend =  'text-white bg-pink-600  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    
  }
    if(props.children.props != undefined){
    
      if(props.children.props.children[0].props.children == 'รายการสั่งซื้อทั้งหมด'){
        classnamepo ='text-white-300 bg-white hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        classnameposell =  'text-white bg-pink-600  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      }
      if(props.children.props.children[0].props.children == 'รายการรับของ'){
        classnameinvoice ='text-white-300 bg-white hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      }
      if(props.children.props.children[0].props.children == 'รายการส่งของ'){
        classnamesend =  'text-white bg-pink-600  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      }
    }
   
    
  }

  
  // var isActive = this.context.router.route.location.pathname === this.props.to;
  // var className = isActive ? 'text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-base font-extrabold' : ''
  var className ='gwp'
  return (
   <>
 
<nav className={color}>

  <div className="mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" className={'inline-flex items-center justify-center p-2  rounded-md text-gray-400 hover:text-white hover: '+color+' focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'} aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
        
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    
        {(role == 1) && (
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
            <a className={'text-gray-300  hover:'+color+' hover:text-white px-3 py-2 rounded-md text-sm font-medium'} >รายการรับของ</a>
            </div>
            <div className="hidden sm:block sm:ml-6">
 <div className="flex space-x-4">
 <Link href="/components/polist">

 <a className={classnamepo} aria-current="page">รายการสั่งซื้อทั้งหมด</a>


</Link>
<Link href="/components/invoicelist">
   <a className={classnameinvoice}>รายการรับของ</a>
   </Link>
 
 </div>    </div>
      </div>
        )}
          {(role == 2) && (
               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
               <div className="flex-shrink-0 flex items-center">
               {closeprofile ? (  <a  onClick={()=>{setcloseprofile(false)}} className={'text-gray-300  hover:'+color+' hover:text-white px-3 py-2 rounded-md text-sm font-medium'} >รายการรับของ</a>
         ):(  <a  onClick={()=>{setcloseprofile(true)}} className={'text-gray-300  hover:'+color+' hover:text-white px-3 py-2 rounded-md text-sm font-medium'} >รายการรับของ</a>
         )}
                   </div>
               <div className="hidden sm:block sm:ml-6">
 <div className="flex space-x-4">
 <Link href="/components/polistsell">

 <a className={classnameposell} aria-current="page">รายการสั่งซื้อทั้งหมด</a>


</Link>
<Link href="/components/invoicelistsell">
   <a className={classnamesend}>รายการส่งของ</a>
   </Link>
 
 </div> </div>
      </div>
        )}
         
    
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <label className={'text-gray-300 hover:'+color+' hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>{nameuser}</label>


        
        <div className="ml-3 relative">
          <div className={''+color+' flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'}>
            <button onClick={logout} type="button" className= {''+color+' flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'} id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <label className={'text-gray-300 hover:'+color+' hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>Logout</label>

            </button>
          </div>

          
          
   
        </div>
      </div>
    </div>
  </div>

  
  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      
      {/* <a href="#" className="bg-indigo-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">รายการสั่งซื้อทั้งหมด</a>

      <a href="#" className="text-gray-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">รายการรับของ</a> */}

 
    </div>
  </div>
</nav>
<body className="min-h-screen bg-gray-100">

<main className=' flex-grow flex flex-col min-h-screen '>

<div className='flex flex-grow item-center justify-between  page-content '>
{(role == 2) && (
  <>


{closeprofile ? (
   
<div className={''+color+' opacity-95 w-72   relative  space-y-6 '} >
<label className="text-white block px-4 text-center">Supplier's profile</label>

<label className="text-white block  px-4">บริษัท Supplier จำกัดบริษัท Supplier จำกัดบริษัท Supplier จำกัดบริษัท Supplier จำกัดบริษัท Supplier จำกัดบริษัท Supplier จำกัดบริษัท Supplier จำกัด.</label>

<label className="text-white block  px-4">ที่อยู่ ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ที่อยู่ </label>

<label className="text-white block  px-4">ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ ติดต่อ  </label>

</div>
  
):(
<></>
 
)}
</>
)}
<div className='ground w-full  overflow-auto'>
    
  {props.children}
  </div>

  </div>
</main>
  </body>
</>)
}

export default Layout;