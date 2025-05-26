import UserLogin from '../components/UserLogin';
import UserRegister from '../components/UserRegister';

function UserAuthentification() {
  return (
    <div>
      <h2>Login / Register</h2>
      <UserLogin />
      <UserRegister />
    </div>
  );
}

export default UserAuthentification;
