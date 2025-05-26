import CreateTournament from '../components/CreateTournament';
import EditTournament from '../components/EditTournament';
import CancelTournament from '../components/CancelTournament';
import TournamentRegistration from '../components/TournamentRegistration';

function TournamentPage() {
  return (
    <div>
      <h2>Tournament Tools</h2>
      <CreateTournament />
      <EditTournament />
      <CancelTournament />
      <TournamentRegistration />
    </div>
  );
}

export default TournamentPage;
