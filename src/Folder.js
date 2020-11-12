import React from "react";

const Headers = ({ titles, currentTab, selectTab }) => {
  const headerClass = index === currentTab;
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 10);
    selectTab(index);
  };

  const tabs = titles.map((title, idx) => {
    return (
      <li key={idx} onClick={handleClick}>
        {title}
      </li>
    );
  });

  return <ul className="tab-header">{tabs}</ul>;
};

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
  }

  selectTab = (index) => {
    this.setState({ currentTab: index });
  };

  render() {
    const folder = this.props.folders[this.state.currentTab];
    let titles = this.props.folders.map((e) => e.title);

    return (
      <div>
        <h1>Folder</h1>
        <div className="tabs">
          {/* this is how you comment in JSX! */}
          <Headers
            titles={titles}
            currentTab={this.state.currentTab}
            selectTab={this.selectTab}
          />
          <div className="tab-content">{folder.content}</div>
        </div>
      </div>
    );
  }
}

export default Folder;
