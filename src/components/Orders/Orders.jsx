

const Orders = () => {
    return (
        <div>
            <ul className="grid grid-cols-3 gap-5 text-center mm-5 p-5 ">
                <li className="w-40 h-40 bg-blue-400">Order - 1</li>
                <li className="w-40 h-40 bg-red-500">Order - 2</li>
                <li className="w-40 h-40 bg-green-400">Order - 3</li>
                <li className="w-40 h-40 bg-orange-500">Order - 4</li>
                <li className="w-40 h-40 bg-red-200">Order - 5</li>
                <li className="w-40 h-40 bg-black">Order - 6</li>
                <li className="w-40 h-40 bg-blue-50">Order - 7</li>
                <li className="w-40 h-40 bg-orange-950">Order - 8</li>
                <li className="w-40 h-40 bg-green-50">Order - 9</li>
                {/* <li className="w-10 h-10 bg-green-900">Order - 10</li> */}
            </ul>
        </div>
    );
};

export default Orders;