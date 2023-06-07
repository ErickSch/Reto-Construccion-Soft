import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const getProfileUrl = 'http://localhost:5000/getprofile/';

  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Make a request to the server to fetch the user profile
        const response = await axios.get(getProfileUrl + id);
        const data = response.data;

        // Set the user state with the retrieved profile data
        setUser(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.Username}!</h1>
      <p>Mostrar perfil</p>
    </div>
  );
};

export default Profile;
