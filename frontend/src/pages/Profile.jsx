import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../services/api";
import { getProfile } from "../redux/userSlice";

const DEFAULT_AVATAR = "/user.png";

const Profile = () => {
    const user = useSelector((state) => state.user.userInfo);
    const { loading, error } = useSelector((state) => state.user);
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [avatar, setAvatar] = useState(user?.avatar || "");
    const [avatarFile, setAvatarFile] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setName(user?.name || "");
        setEmail(user?.email || "");
        setAvatar(user?.avatar || "");
    }, [user]);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
            setAvatar(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        if (avatarFile) {
            formData.append("avatar", avatarFile);
        }
        try {
            await api.put("/update", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            dispatch(getProfile());
            // Optionally update local state or show a success message
            // You could also refetch user info here if needed
        } catch {
            alert("Failed to update profile.");
        }
    };

    return (
        <div className="bg-gradient-to-br from-white via-[#f8f9fa] to-[#f3f6fd] min-vh-100 py-5" style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #f8fafc 0%, #f3f6fd 100%)' }}>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-lg-4">
                        <div className="card p-4 border-0 shadow-lg text-center rounded-4 bg-white" style={{ backdropFilter: 'blur(6px)', border: '1px solid #f3f3f3' }}>
                            <div
                                className="position-relative mx-auto mb-3 shadow-lg rounded-circle"
                                style={{ width: 140, height: 140, background: 'rgba(255,255,255,0.7)', border: '4px solid #f3f3f3', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
                            >
                                <img
                                    src={
                                        avatar
                                            ? avatar.startsWith("http") || avatar.startsWith("blob:")
                                                ? avatar
                                                : `/uploads/${avatar}?t=${Date.now()}`
                                            : DEFAULT_AVATAR
                                    }
                                    alt={name}
                                    className="rounded-circle border border-3 border-warning shadow-lg"
                                    style={{ width: 132, height: 132, objectFit: "cover", background: '#fff' }}
                                />
                                <label
                                    className="btn btn-light border-0 shadow-sm position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center"
                                    style={{ borderRadius: "50%", width: 40, height: 40, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                                    title="Change avatar"
                                >
                                    <i className="bi bi-camera fs-5 text-primary"></i>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={handleAvatarChange}
                                    />
                                </label>
                            </div>
                            <h2 className="h4 fw-bold text-dark mb-1 mt-2">{name}</h2>
                            <p className="text-muted small mb-3">{email}</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="card p-4 border-0 shadow-lg rounded-4 bg-white" style={{ backdropFilter: 'blur(6px)', border: '1px solid #f3f3f3' }}>
                            <h3 className="h5 fw-semibold mb-4">Profile Information</h3>
                            <form onSubmit={handleSubmit} className="vstack gap-3">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="form-label small fw-semibold"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="form-label small fw-semibold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && (
                                    <div className="alert alert-danger py-2 small mb-0">
                                        {error}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="btn btn-warning fw-semibold w-100 rounded-pill py-2 fs-5 shadow-sm"
                                    disabled={loading}
                                    style={{ letterSpacing: 1 }}
                                >
                                    {loading ? (
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                    ) : null}
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
