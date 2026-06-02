import { CircleQuestionMark, House, Mail, Settings, User } from 'lucide-react';

function Scrollbar() {
  return (
    <div className="center myscrollbar">
      <ul>
        <li><House /> Dashboard</li>
        <li><User /> Profile</li>
        <li><Mail /> Messages</li>
        <li><Settings /> Settings</li>
        <li><CircleQuestionMark /> Help</li>
      </ul>
    </div>
  );
}

export default Scrollbar;