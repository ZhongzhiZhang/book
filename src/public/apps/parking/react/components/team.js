MyComponents.Team = React.createClass({
  render: function() {
    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)
    // For each 'member' in 'team', create a <li> component to display
    // information about this member.
    var members = this.props.members.map(function(member, i){
      return <li key={i} className="collection-item blue darken-4">
              <span className="white-text">{member.name}:</span>
              <a className="blue-text" href={member.github}>  Github</a>
            </li>
    })


    return (
      <div className="card blue darken-4">
        <div className="card-content">
          <div>
          </div>
          <span className="card-title white-text">Team Members</span>
          <div className="collection">
            {members}
          </div>
        </div>
      </div>
    );
  }
});
