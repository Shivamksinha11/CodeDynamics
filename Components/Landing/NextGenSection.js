import Image from 'next/image'
import Link from 'next/link'

const NextGenSection = ({ productData }) => {
  return (
        <div className="flex flex-col items-center justify-center text-center my-20 text-gray-400 font-roboto">
            <div className="uppercase text-md tracking-wider">Our Products</div>
            <div className="my-5">
                <Image src={productData.product.logo} alt={productData.product.title} width="400px" height="80px" />
            </div>
            <div className="text-lg max-w-xl">{productData.product.description}</div>
            <div className="mt-10">
                <Image src={productData.product.mainImage} alt="mainframe" width="918px" height="648px" />
            </div>
            <Link href={productData.product.url}>
                <a target="_blank" rel="noopener noreferrer" className='w-40 h-8 flex items-center justify-center bg-gray-700 text-sm rounded-full text-white font-medium shadow-2xl'>{productData.product.buttonText}</a>
            </Link>
        </div>
    )
}

export default NextGenSection