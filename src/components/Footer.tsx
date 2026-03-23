const Footer = () =>{
    return(
        <footer>
            <div className="p-10 border-t-2 border-l-2 flex  flex-col justify-between">
             <div className="w-4xl">
            <div className="flex  flex-row gap-20">
                <ul>
                    <li className="font-bold pb-4">COMPAGNY</li>
                    <li>About Nike</li>
                    <li>FAQ</li>
                    <li>News</li>
                    <li>Accessibility</li>
                </ul>
                 <ul>
                    <li className="font-bold pb-4">COLLABORATE</li>
                    <li>Privacy Policy</li>
                    <li>Delivery Policy</li>
                    <li>Terms of Use</li>
                    <li>Terms of Sale</li>
                </ul>
                 <ul>
                    <li className="font-bold pb-4">SHOP</li>
                    <li>How to order</li>
                    <li>Track you order</li>
                    <li>Return & Exchanges</li>
                </ul>
            </div>
            </div>
            <div className="flex flex-row w-4xl">
            <div>
                <p className="font-bold pb-4">EMAIL ADRESS</p>
                <input type="text" placeholder="Enter your email"
                className="p-4 pr-28 border-b-2 border-l-2 border-t-2 w-123px " />
                <input type="text"
                placeholder="SUBMIT"
                className=" text-white bg-red-500 text-center p-4 border-red-500 border-2" />
            </div>
            </div>
            <div >
                <p>© 2026 Nike, Inc. All Rights Reserved</p>
            </div>
            </div>
        </footer>
    )
}
export default Footer
// border-b-2 