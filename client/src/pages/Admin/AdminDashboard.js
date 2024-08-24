import React from 'react'
import Layout from '../../component/Layout/Layout'
import AdminMenu from '../../component/Layout/AdminMenu';
import { useAuth } from "../../context/auth";

const AdminDashBoard = () => {
    const [auth] = useAuth();
    console.log(JSON.stringify(auth, null, 4))
    return (
        <Layout>
            <div className="container-fluid p-3" style={{ marginTop: '100px' }}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3> Admin Name : {auth?.user?.name}</h3>
                            <h3> Admin Email : {auth?.user?.email}</h3>
                            <h3> Admin Contact : {auth?.user?.phone}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashBoard