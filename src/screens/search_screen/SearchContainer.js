import React, { Component } from 'react';
import SearchView from './SearchView';
import { inject, observer } from 'mobx-react';
import { getPlaceName } from '../../api/MapAPI';
import { getCountryCode } from '../../api/Search';
@inject('store')
@observer
export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    getCountryCode().then(val => {
      this.props.store.changeCountryCode(val.countryCode + '');
    });
  }
  render() {
    return <SearchView {...this.props} />;
  }
}
