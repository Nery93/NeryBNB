import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';


const AccProfile = ({ user}) => {
    const [redirect, setRedirect] = React.useState(false);

    const logout = async () => {
        try {
            const { data } = await axios.post('/users/logout');
            setRedirect(true);
            alert(data.message || "Logout realizado com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao realizar logout.");
        }
    };

    if (redirect) return <Navigate to="/" />;

    if (!user) return <></>;
    return (
        <div className='flex flex-col items-center gap-2'>
            <p>Logado como {user.name} {user.email}</p>

            <button onClick={logout} className='bg-primary-400 text-white rounded-full px-6 py-2 font-medium hover:bg-primary-500 transition-colors cursor-pointer'>
                Sair
            </button>
        </div>
    );
}

export default AccProfile