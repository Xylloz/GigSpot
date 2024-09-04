import { useNavigate } from 'react-router-dom';

function SplashPage() {
    const navigate = useNavigate();
    return (
        <div>
             <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="space-x-4">
        <button className="w-80 h-80 bg-red-500 text-white text-xl font-bold rounded-lg"
                onClick={() => navigate('/employee')}
                >
          Employee
        </button>
        <button className="w-80 h-80 bg-blue-500 text-white text-xl font-bold rounded-lg"
                onClick={() => navigate('/employer')}
                >
          Employer
        </button>
      </div>
    </div>
        </div>
    )
}

export default SplashPage
