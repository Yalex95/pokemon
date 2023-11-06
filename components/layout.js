import Head from 'next/head'
import Navbar from './navbar'
function Layout ({children, title = '', description=''}) {
    return (
        <>
        <Head>
        <title>{`Pokemon - ${title}`}</title>
        <meta name="description" content={`${description}`}/>
        </Head>
        <Navbar/>
        {children}
        </>
    )
}

export default Layout