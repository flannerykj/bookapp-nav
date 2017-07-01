'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
// Redux
import { connect } from 'react-redux'

import SearchTabMain from './SearchTabMain'

const routeConfiguration = {
  SearchTabMain: { screen: SearchTabMain },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'SearchTabMain'
}

export const NavigatorSearchTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)

class SearchTabNavigation extends React.Component {
  static navigationOptions = {
    title: 'Search Tab',
    tabBarLabel: 'Search Tab',
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorSearchTab
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
const mapStateToProps = (state) => {
 return {
  navigationState: state.searchTab
  }
}

export default connect(mapStateToProps)(SearchTabNavigation)
