import { footerLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 x-5">
        <div className="screen-max-width">
            <div className="">
                <p className="font-semibold text-gray text-xs">
                    More ways to shop: {' '}
                    <span className="underline text-blue">
                        {' '} Find an Apple Store {''}
                    </span>
                    or
                    <span className="underline text-blue">
                        other retailer
                    </span>{' '}
                    near you.
                    </p>
                    <p className="font-semibold text-gray text-xs">
                       Or call 0000-0000-12345 {' '}
                    </p>
            </div>
            <div className="bg-neutral-700 my-5 h-[1px] w-full" />

            <div className="flex md:flex-row flex-col md:items-center justify-between">
                <p className="font-semibold text-gray text-xs">Copyright @ 2025 Apple Inc. All rigts reserved.</p>
                <div className="flex">
                    {footerLinks.map((link, i) => (
                        <p key={link} className="font-semibold text-gray text-xs">
                            {link}{' '}
                            {i !== footerLinks.length - 1 && (
                                <span className="mx-2"> | </span>
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer