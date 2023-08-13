import { memo, useRef, useState } from 'react';

const AddProperty = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Choose a type');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [surface, setSurface] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const formRef = useRef();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const checkLength = (string, numberOfLength) => string.length > numberOfLength;
        const checkNumber = (string) => parseInt(string) > 0 && parseInt(string) < 20;

        if (
            checkLength(name, 6) &&
            checkLength(desc, 10) &&
            checkLength(country, 5) &&
            checkLength(address, 5) &&
            checkNumber(bathrooms) &&
            checkNumber(bedrooms) &&
            checkLength(surface, 6) &&
            type !== 'Choose a type' &&
            imageFile
        ) {
            formRef.current.submit();
        } else {
            alert('Please check the value field again !');
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-full py-7 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Your Property
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            action="http://localhost:4000/create"
                            method="post"
                            encType="multipart/form-data"
                            ref={formRef}
                        >
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    id="property-name"
                                    placeholder="name..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="property-type"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Choose your property's type
                                </label>
                                <select
                                    name="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    id="property-type"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="Choose a type">Choose a type</option>
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="desc"
                                    id="property-desc"
                                    placeholder="description..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="country"
                                    id="property-country"
                                    placeholder="country..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="address"
                                    id="property-address"
                                    placeholder="address..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="bedrooms"
                                    id="property-bedrooms"
                                    placeholder="number of bedrooms..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={bedrooms}
                                    onChange={(e) => setBedrooms(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="bathrooms"
                                    id="property-bathrooms"
                                    placeholder="number of bathrooms..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={bathrooms}
                                    onChange={(e) => setBathrooms(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="surface"
                                    id="property-surface"
                                    placeholder="surface..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={surface}
                                    onChange={(e) => setSurface(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="price"
                                    id="property-price"
                                    placeholder="price..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Property's image
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    accept="image/*"
                                    // value={imageFile}
                                    onChange={(e) => setImageFile(e.target.files[0])}
                                />
                            </div>
                            <button
                                onClick={handleSubmitForm}
                                type="submit"
                                className="w-full text-white bg-secondary hover:text-violet-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:text-violet-900 dark:focus:ring-primary-800"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(AddProperty);
