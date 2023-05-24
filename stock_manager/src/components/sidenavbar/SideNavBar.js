import './sidenavbar.css'

function Tab(prop){

    function handleClick(){
        window.location.href=prop.url
    }

    return <div className='tab_button' onClick={handleClick}><span>{prop.tab}</span></div>
}

export default function SideNavBar(){
    const tabs = [
        {tab:'Dashboard',url:'/'},
        {tab:'상품목록',url:'/products/list'},
        {tab:'신규상품 등록',url:'/products/new'},
        {tab:'판매량',url:'/products/sales'},
        {tab:'제트배송',url:'/rocketgrowth'},
        {tab:'Dashboard',url:'/'},
        {tab:'Dashboard',url:'/'},
    ]

    const tablist = tabs.map(tab => <Tab tab={tab.tab} url={tab.url}></Tab>)

    return <aside className='sidenavbar'>
        <div className='sidenavbar_content'>
            {tablist}
                </div>
        </aside>
}