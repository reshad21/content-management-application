import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../../redux/Thunk/content/fetchContent';

const ProductList = () => {
    const contents = useSelector(state => state.content);
    console.log(contents);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContent())
    }, [dispatch])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contents?.map((content, i) => {
                                return (
                                    <tr key={contents._id}>
                                        <th>
                                            <label>
                                                {i + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={content?.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">{content?.title}</div>
                                        </td>
                                        <td>{content?.tag}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>)
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ProductList;