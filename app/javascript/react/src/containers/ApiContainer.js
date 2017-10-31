import React from 'react';
import SelectField from '../components/SelectField'

class ApiContainer extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedApiUrl: '',
      fetchError: false,
      loading: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.fetchStockData = this.fetchStockData.bind(this);
  }

  fetchStockData(apiUrlString) {

    this.setState({ loading: true })

    fetch(apiUrlString)
    .then(response => {
      if (response.ok) { return response; }
      else { throw new Error(`Could not reach server!`) }
    })
    .then(response => response.json())
    .then(body => { this.handleFetch(body) })
    .catch(error => { console.log('Error in fetch!') });
    this.setState({ loading: false })
  }

  handleSelect(selectedItem) {
    // console.log('full url: ' + selectedItem.target.value);
    this.setState({ selectedApiUrl: selectedItem.target.value })
    this.fetchStockData(selectedItem.target.value.toString());
  }

  handleFetch(apiData) {
    console.log(apiData);
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className='container-info'>
          <i className="fa fa-database fa-2x" id="box-icon" aria-hidden="true"></i>
          <h2 className='container-title'>Data | </h2>
          {/* <div className='container-dropdown'>Dropdown</div> */}
        </div>
        {/* <SelectField
          value={this.state.selectedApiUrl}
          handleSelect={this.handleSelect}
        /> */}
        <div className='container-settings'>
          <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default ApiContainer;
