import PlayButton from '../components/PlayButton.client';
import { faMagnifyingGlass, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import '../lib/fontawesome';

export const metadata = {
  title: 'Sherlock Detective Game - Home',
  description: 'Inizia la tua avventura investigativa nel nostro gioco!',
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-radial from-neutral-700 to-neutral-900">
      <PlayButton />
    </div>
  );
};

export default Home;