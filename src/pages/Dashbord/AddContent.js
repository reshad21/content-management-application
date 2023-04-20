import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddContent = () => {
    const { register, handleSubmit } = useForm();
    const submit = (data) => {
        const product = {
            title: data.title,
            image: data.image,
            tag: data.tag,
            description: data.description,
            // spec: [],
        };

        // dispatch(addProduct(data));
        // console.log(product);
        // toast.success('product added Successfully.');


        
        fetch('http://localhost:5000/articls', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('product added Successfully.');
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type='text' id='title' {...register("title")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type='text' name='image' id='image' {...register("image")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='tag'>
                        Tags
                    </label>
                    <select className="select select-bordered w-full max-w-xs" name='tag' id='tag' {...register("tag")}>
                        <option value='amd'>AMD</option>
                        <option value='intel'>Intel</option>
                    </select>
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea className="textarea textarea-bordered textarea-xs w-full max-w-xs" placeholder="Bio" type='text' name='description' id='description' {...register("description")} ></textarea>
                </div>
                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 btn btn-primary'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddContent;