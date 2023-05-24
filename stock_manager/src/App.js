import './layout.css'
import NormalButton from './components/buttons/NormalButton';
import ProductCard from './components/cards/ProductCard';
import ProductList from './components/productlist/ProductList';
import SideNavBar from './components/sidenavbar/SideNavBar';
function App() {

  const pddata = [
    {
      'summary':'카드를 2장 담을 수 있는 투명케이스',
      'pname':'뮤지오 듀얼슬롯',
      'img':'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/0119/3a70611e5892af6fa245e2b605c97e5965028507a56ec538d863e802ca01.jpg'
    },
    {
      'summary':'지문없는 반투명 케이스',
      'pname':'뮤지오 매트벨벳',
      'img':'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/0119/3a70611e5892af6fa245e2b605c97e5965028507a56ec538d863e802ca01.jpg'
    },
    {
      'summary':'베스트셀러 스퀘어젤리',
      'pname':'뮤지오 스퀘어젤리',
      'img':'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/0119/3a70611e5892af6fa245e2b605c97e5965028507a56ec538d863e802ca01.jpg'
    }
  ]


  return (
    <div className="App">
      <SideNavBar></SideNavBar>
      <main>
      <ProductList data={pddata}></ProductList>
      </main>
    </div>
  );
}

export default App;
