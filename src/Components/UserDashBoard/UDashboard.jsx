import React, { useEffect, useState } from "react";
import { fetchBooking } from "../../fetch";
import { account } from "../../appwriteConfig";
import "./UDashboard.css";

const UDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  useEffect(() => {
    const loadBooking = async () => {
      try {
        const data = await account.get();
        console.log(data);
        
        setUser(data)
        const bookingData= await fetchBooking();
        setBookings(bookingData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadBooking();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      await account.updatePassword(newPassword, oldPassword);
      alert("Password changed successfully ✅");

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordForm(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-card">
        <div className="profile-section">
          <div className="profile-circle">
            <img src="/src/assets/profile.png"  />
          </div>
        </div>

        {user && (
          <div className="info-section">
            <div className="info-box">{user.name}</div>
            <div className="info-box">{user.email}</div>

            <button
              className="info-box-btn"
              onClick={() => setShowPasswordForm(!showPasswordForm)}
            >
              Change Password
            </button>

            {showPasswordForm && (
              <form className="password-form" onSubmit={handleSubmit}>
                <input
                  type="password"
                  placeholder="Current Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <button type="submit">Update Password</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UDashboard;
