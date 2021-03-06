import * as react from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { removeCookie } from '../api/auth'
import jscookie from 'js-cookie';
import { useRouter } from 'next/router'
import Head from 'next/head'

const Layout = (props) => {


  const Router = useRouter();
  if (props) {


    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [closeprofile, setcloseprofile] = useState(false);
    const [nameuser, setnameuser] = useState('');
    const [role, setrole] = useState(0);
    const Router = useRouter();
    const fetchData = async () => {
      if (nameuser == '1') {
        setrole(1)
      }
      if (nameuser == '2') {
        setrole(2)
      }
      setnameuser(jscookie.get('name'))

      if (jscookie.get('role') == '0') {
        //console.log('ggpw')
        setrole(3)
      }
      else if (jscookie.get('role') == '1') {
        setrole(1)
      }
      else if (jscookie.get('role') == '2') {
        setrole(2)
      }

      if (jscookie.get('name') == null) {
        Router.push('/Login')
      }


    };

    useEffect(() => {



      fetchData();

    }, []

    );

    const logout = () => {
      removeCookie('name')

      if (jscookie.get('admintype') == '1') {
        removeCookie('admintype')
        removeCookie('vendoR_NO')
        removeCookie('address')
        
        Router.push('/edivtadmin/login')
      }
      else {
        Router.push('/Login')
      }




    }

    var color = ''
    if (role == 1) {
      color = 'bg-indigo-800'

    }
    if (role == 2) {
      color = 'bg-pink-700'
    }

    // '+{role}+'
    var classnamepo = 'text-white   hover:bg-pink-700 cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    var classnameinvoice = 'text-white   hover:bg-pink-700 cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    var classnamesend = 'text-white   hover:bg-indigo-600 cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    var classnameposell = 'text-white   hover:bg-indigo-600 cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    if (props.children != 'EDI') {
      // if(!props.children.props){

      //     classnamesend =  'text-white bg-pink-600  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'

      // }
      //   if(props.children.props){

      //     if(props.children.props.children[0].props.children == '???????????????????????????????????????????????????????????????'){
      //       classnamepo ='text-white-300 bg-white hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      //       classnameposell =  'text-white bg-pink-600  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      //     }
      //     if(props.children.props.children[0].props.children == '??????????????????????????????'){
      //       classnameinvoice ='text-white-300 bg-white hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      //     }
      //     if(props.children.props.children[0].props.children == '????????????????????????????????????'){
      //       classnamesend =  'text-white bg-pink-600  hover:bg-pink-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      //     }
      //   }


    }


    // var isActive = this.context.router.route.location.pathname === this.props.to;
    // var className = isActive ? 'text-white hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-base font-extrabold' : ''
    var className = 'gwp'
    return (
      <>
      <Head>
        <title>EDI-RJ</title>
      </Head>

        <nav className={color}>

          <div className="mx-auto px-2 sm:px-6 lg:px-8 print_d_none">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                <button type="button" className={'inline-flex items-center justify-center p-2  rounded-md text-gray-400 hover:text-white hover: ' + color + ' focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'} aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>

                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>


                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {(role == 2) && (
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  {/* <div className="flex-shrink-0 flex items-center ">
            <a className={'text-white   hover:'+color+' hover:text-white px-3 py-2 rounded-md text-sm font-medium'} >????????????????????????????????????</a>
            </div> */}
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex flex-shrink-0  space-x-4">
                      <Link href="/components/polist" >
                    <label className={Router.pathname == "/components/polist" ? "bg-white bg-opacity-25 p-2 rounded" : "p-2"}>
                        <a  className={'text-white   hover:' + color + ' hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium' } aria-current="page">???????????????????????????????????????????????????????????????</a>
                        </label>

                      </Link>
                      <Link href="/components/invoicelist">
                      <label className={Router.pathname == "/components/invoicelist" ? "bg-white bg-opacity-25 p-2 rounded" : "p-2"}>
                        <a className={classnameinvoice}>????????????????????????????????????</a>
                        </label>
                      </Link>
                      {/* <Link href="/components/invoicelist">
                        <a className={classnameinvoice}>????????????????????????????????????</a>
                      </Link> */}
                      <Link href="/components/popickup">
                      <label className={Router.pathname == "/components/popickup" ? "bg-white bg-opacity-25 p-2 rounded" : "p-2"}>
                        <a className={classnameinvoice}>?????????????????????????????????????????????</a>
                        </label>
                      </Link>

                    </div>    </div>
                </div>
              )}
              {(role == 1) && (
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start print_d_none">
                  <div className="p-2">
                    {closeprofile ? (<a onClick={() => { setcloseprofile(false) }} className={'text-white   hover:' + color + ' hover: cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium'} >??????????????????????????????</a>
                    ) : (
                      <a onClick={() => { setcloseprofile(true) }} className={'text-white   hover:' + color + ' hover: cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium'} >??????????????????????????????</a>
                    )}


                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <Link href="/components/polistsell">
                      <label className={Router.pathname == "/components/polistsell" ? "bg-white bg-opacity-25 p-2 rounded" : "p-2"}>
                        <a className={classnameposell} aria-current="page">???????????????????????????????????????????????????????????????</a>
</label>

                      </Link>
                      <Link href="/components/invoicelistsell">
                      <label className={Router.pathname == "/components/invoicelistsell" ? "bg-white bg-opacity-25 p-2 rounded" : "p-2"}>
                        <a className={classnamesend}>????????????????????????????????????</a>
                        </label>

                      </Link>

                    </div> </div>
                </div>
              )}


              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 print_d_none">
                <label className={'text-white hover:' + color + ' hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>{nameuser}</label>
                {(jscookie.get('admintype') == '1') && (
                  dropdownOpen ? (
                    <>
                      <button onClick={() => setdropdownOpen(false)} className="relative z-10 block rounded-md text-white  p-2 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </button>
                      <div className="flex justify-center h-screen">
                        <div className="relative my-32">



                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <button onClick={() => setdropdownOpen(true)} className="relative z-10 block rounded-md text-white p-2 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </button>

                    </>
                  )
                )}





                <div className="ml-3 relative print_d_none">
                  <div className={'' + color + ' flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'}>
                    <button onClick={logout} type="button" className={'' + color + '  flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'} id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <label className={'text-white hover:' + color + '  hover: cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium'}>Logout</label>
                    </button>
                  </div>




                </div>
              </div>
            </div>
          </div>


          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">

              {/* <a href="#" className="bg-indigo-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">???????????????????????????????????????????????????????????????</a>

      <a href="#" className="text-white hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">??????????????????????????????</a> */}


            </div>
          </div>
        </nav>
        <body className="min-h-screen bg-gray-100 ">

          <main className=' flex-grow flex flex-col min-h-screen '>

            <div className='flex flex-grow item-center justify-between  page-content '>
              {(role == 1) && (
                <>


                  {closeprofile ? (

                    <div className={'' + color + ' opacity-95 w-72   relative  space-y-6 '} >
                      <label className="text-white block px-4 text-center">Supplier's profile</label>

                      <label className="text-white block  px-4">{jscookie.get('name')} </label>

                      <label className="text-white block  px-4">{jscookie.get('address')} </label>

                      <label className="text-white block  px-4">?????????????????? ???????????????????????????????????? : 0-2221-2141-69 ?????????????????? 0-2221-2170 </label>

                    </div>

                  ) : (
                    <></>

                  )}
                </>
              )}
              <div className='ground w-full  overflow-auto'>

                {props.children}
              </div>
            
              {(jscookie.get('admintype') == '1') && (
                dropdownOpen ? (

                  <><div x-show="dropdownOpen" onClick={() => setdropdownOpen(false)} className="fixed inset-0 h-full w-full z-10"></div><div x-show="dropdownOpen" className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <Link href="/edivtadmin/setuplocal">
                    <label className={Router.pathname == "/edivtadmin/setuplocal" ? "bg-white bg-opacity-25 p-2 rounded" : "p-2"}>
  
                      <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer ">
                        Set Local
                      </a>
</label>
                    </Link>


                  </div></>
                ) : <></>
              )}
            </div>
          </main>
        </body>
      </>)
  }
}

export default Layout;