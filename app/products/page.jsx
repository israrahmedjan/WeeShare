
import { Listing } from '../_components/products/Listing'
import { GetProducts } from '@/lib/products';
import GetPagination from '../_components/products/Pagination';
import Filter from '../_components/products/Filter';




async function  page({search,page,sort}) {
//  const searchParams = props.searchParams || {};

//   const page = parseInt(searchParams.page || '1');
//   const sort = searchParams.sort || '';
//   const search = searchParams.search || '';
  const limit = 10;
 //console.log(searchParams);
 const products = await GetProducts(page,limit,sort,search);

  return (
    <>
    {/* <div>{page}{JSON.stringify(products,null,2)}</div> */}
    
    <div className='flex justify-between items-center mb-3'><h1 className='text-2xl '>Products -  {sort}</h1>
    {products.data.length !== 0 && (<span><Filter /></span>) }
    
    </div>

    {products.data.length !== 0 ?(<div> 
      <Listing data={products.data} />
      <GetPagination currentPage={page} totalItems={products.totalItems} limit={limit}  />

    </div>)
   
    :(<div>Loading..</div>)}
   
    </>
  )
}

export default page