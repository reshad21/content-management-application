import React, { useEffect } from 'react';
import { CiViewList } from 'react-icons/ci';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContentData } from '../../redux/Thunk/content/deleteContentData';
import { fetchContent } from '../../redux/Thunk/content/fetchContent';
const ProductList = () => {
    const contents = useSelector(state => state.content);
    console.log(contents);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContent())
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Tags</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (contents.length > 0) && contents.map((content, i) => {
                                return (
                                    <tr key={content._id}>
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
                                            <div className="">
                                                <Link to={`/dashboard/content/${content?._id}`} className="btn btn-ghost btn-lg text-indigo-600 text-xl">
                                                    <CiViewList />
                                                </Link>
                                                <button onClick={() => dispatch(deleteContentData(content._id))} className="btn btn-ghost btn-lg text-rose-600"><RiDeleteBin7Line /></button>
                                                <button className="btn btn-ghost btn-lg text-green-700"><FiEdit /></button>
                                            </div>
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